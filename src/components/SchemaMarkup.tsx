import React from 'react';

export const SchemaMarkup = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Vengelic",
    "image": "https://vengelic.com/Open%20Graph%20image.png",
    "@id": "https://vengelic.com",
    "url": "https://vengelic.com",
    "telephone": "",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "London",
      "addressRegion": "London",
      "postalCode": "",
      "addressCountry": "UK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.5074,
      "longitude": -0.1278
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.linkedin.com/company/vengelic"
    ],
    "description": "Bespoke SEO strategies for brands that demand authority and elegance.",
    "serviceType": ["SEO", "Search Engine Optimization", "Digital Marketing", "Local SEO"]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
