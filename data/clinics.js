// Public clinic facts; Lleida hours confirmed by the owner on 2026-09-15.
module.exports = {
  "lleida": {
    "@type": "Dentist",
    "@id": "https://www.estudidentalcarrera.com/#lleida",
    "name": "Estudi Dental Carrera",
    "url": "https://www.estudidentalcarrera.com/clinica-dental-lleida.html",
    "image": "https://www.estudidentalcarrera.com/assets/img/lleida-edifici.jpg",
    "telephone": "+34973268826",
    "email": "carrera@clinicarrera.cat",
    "priceRange": "€€",
    "branchOf": {
      "@id": "https://www.estudidentalcarrera.com/#organization"
    },
    "hasMap": "https://www.google.com/maps/search/?api=1&query=Estudi+Dental+Carrera+Lleida",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Carrer Major, 74-76, 3r 3a",
      "postalCode": "25007",
      "addressLocality": "Lleida",
      "addressRegion": "Lleida",
      "addressCountry": "ES"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "14:00"
      }
    ],
    "areaServed": {
      "@type": "City",
      "name": "Lleida"
    },
    "medicalSpecialty": "https://schema.org/Dentistry"
  },
  "tremp": {
    "@type": "Dentist",
    "@id": "https://www.estudidentalcarrera.com/#tremp",
    "name": "Estudi Dental Tremp",
    "url": "https://www.estudidentalcarrera.com/dentista-tremp.html",
    "image": "https://www.estudidentalcarrera.com/assets/img/tremp-exterior.jpg",
    "telephone": "+34973447534",
    "email": "contacte@estudidentaltremp.com",
    "priceRange": "€€",
    "branchOf": {
      "@id": "https://www.estudidentalcarrera.com/#organization"
    },
    "hasMap": "https://www.google.com/maps/search/?api=1&query=Estudi+Dental+Tremp",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Carrer Montllobar, 22 Baixos",
      "postalCode": "25620",
      "addressLocality": "Tremp",
      "addressRegion": "Lleida",
      "addressCountry": "ES"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "19:00"
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 42.16731,
      "longitude": 0.89164
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Pallars Jussà"
    },
    "medicalSpecialty": "https://schema.org/Dentistry"
  }
};
