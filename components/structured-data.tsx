export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "RelWave",
        "operatingSystem": "Windows, Linux",
        "applicationCategory": "DeveloperApplication",
        "downloadUrl": "https://github.com/Relwave/relwave-app/releases/latest",
        "author": {
          "@type": "Organization",
          "name": "Yashh56",
          "url": "https://github.com/Yashh56"
        },
        "description": "RelWave is a modern, cross-platform database management and visualization tool. Connect, explore, and visually map PostgreSQL, MySQL, MariaDB, and SQLite databases naturally.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "Organization",
        "name": "RelWave",
        "url": "https://relwave.tech",
        "logo": "https://relwave.tech/icon.png",
        "sameAs": [
          "https://github.com/Relwave/relwave-app"
        ]
      },
      {
        "@type": "WebSite",
        "url": "https://relwave.tech",
        "name": "RelWave",
        "description": "The Local-First Database Client for Modern Workflows."
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
