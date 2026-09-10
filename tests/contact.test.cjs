const { test, beforeEach, afterEach } = require('node:test');
const assert = require('node:assert/strict');
const contact = require('../api/contact.js');
const originalFetch = global.fetch;
const originalEnv = { ...process.env };
let deliveries;
const body = { name: 'Prova tècnica', phone: '+34 600 000 000', email: 'test@example.invalid', seu: 'carrera', consent: true, lang: 'ca', horari: '', requestId: '123e4567-e89b-42d3-a456-426614174000' };
async function request(overrides = {}, method = 'POST') {
 const res = { headers: {}, setHeader(k,v) {this.headers[k]=v}, status(n){this.code=n;return this}, json(v){this.body=v} };
 await contact({method, body:{...body,...overrides}},res);return res;
}
beforeEach(()=>{
 deliveries=[];
 Object.assign(process.env,{RESEND_API_KEY:'test-only',CONTACT_FROM_EMAIL:'site@example.invalid',CONTACT_EMAIL_LLEIDA:'lleida@example.invalid',CONTACT_EMAIL_TREMP:'tremp@example.invalid'});
 global.fetch=async(url,options)=>{deliveries.push({url,options,body:JSON.parse(options.body)});return {ok:true,status:200}};
});
afterEach(()=>{global.fetch=originalFetch;for(const k of ['RESEND_API_KEY','CONTACT_FROM_EMAIL','CONTACT_EMAIL_LLEIDA','CONTACT_EMAIL_TREMP']){if(originalEnv[k]===undefined) delete process.env[k];else process.env[k]=originalEnv[k]}});
for(const lang of ['ca','es'])for(const seu of ['carrera','tremp'])test(`${lang}/${seu}: routes only to the chosen reception`,async()=>{
 const r=await request({lang,seu});assert.equal(r.code,200);assert.equal(r.body.ok,true);assert.deepEqual(deliveries[0].body.to,[`${seu==='carrera'?'lleida':'tremp'}@example.invalid`]);assert.match(deliveries[0].body.subject,new RegExp(seu==='carrera'?'Lleida':'Tremp'));
});
test('rejects empty/invalid clinic, phone and consent without a delivery',async()=>{
 for(const change of [{seu:''},{seu:'other'},{phone:'------'},{phone:'abc123'},{consent:false},{email:'bad@'},{name:'  '},{horari:'21:00'}]){const r=await request(change);assert.equal(r.code,400);assert.ok(r.body.fields.length)}assert.equal(deliveries.length,0);
});
test('orientation and injected health/message fields never reach the provider',async()=>{
 await request({orientation:'secret symptom',service:'secret symptom',message:'secret symptom'});assert.ok(!JSON.stringify(deliveries).includes('secret symptom'));
});
test('HTML and subject are escaped and email retry carries idempotency key',async()=>{
 await request({name:'<img src=x>\r\nHeader: value'});assert.ok(!deliveries[0].body.html.includes('<img src=x>'));assert.ok(!deliveries[0].body.subject.includes('\n'));assert.equal(deliveries[0].options.headers['Idempotency-Key'],`appointment/${body.requestId}`);
});
test('misconfiguration fails honestly without attempting delivery',async()=>{delete process.env.RESEND_API_KEY;const r=await request();assert.equal(r.code,503);assert.equal(deliveries.length,0)});
test('upstream failure never returns success',async()=>{global.fetch=async()=>({ok:false,status:500});assert.equal((await request()).code,502)});
test('network failure never returns success',async()=>{global.fetch=async()=>{throw Error('offline')};assert.equal((await request()).code,502)});
test('honeypot avoids sending and other methods are rejected',async()=>{assert.equal((await request({website:'bot'})).code,200);assert.equal(deliveries.length,0);assert.equal((await request({},'GET')).code,405)});
