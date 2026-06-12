import React from 'react';

const partnerLogos = [
  { id: "toyota", url: "https://cdn.simpleicons.org/toyota/EB0A1E", name: "Toyota" },
  { id: "mercedes", url: "https://cdn.simpleicons.org/mercedesbenz/000000", name: "Mercedes-Benz" },
  { id: "bmw", url: "https://cdn.simpleicons.org/bmw/0066B3", name: "BMW" },
  { id: "hyundai", url: "https://cdn.simpleicons.org/hyundai/002C5F", name: "Hyundai" },
  { id: "kia", url: "https://cdn.simpleicons.org/kia/05141F", name: "KIA" },
  { id: "nissan", url: "https://cdn.simpleicons.org/nissan/C11B17", name: "Nissan" },
  { id: "honda", url: "https://cdn.simpleicons.org/honda/E60012", name: "Honda" },
  { id: "ford", url: "https://cdn.simpleicons.org/ford/003399", name: "Ford" },
  { id: "bosch", url: "https://cdn.simpleicons.org/bosch/E20015", name: "Bosch" },
  { id: "tesla", url: "https://cdn.simpleicons.org/tesla/CC0000", name: "Tesla" },
];

export default function PartnerSlider() {
  const repeatedLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos];
  return (
    <section className="bg-slate-50 py-6 border-b border-slate-200 overflow-hidden relative z-20" dir="ltr">
      <div className="marquee-track">
        <div className="marquee-content">
          {repeatedLogos.map((logo, idx) => (
            <div key={`a-${idx}`} className="flex-shrink-0 mx-8 flex items-center justify-center" style={{ width: '100px', height: '50px' }}>
              <img
                src={logo.url}
                alt={logo.name}
                className="max-h-[44px] max-w-[90px] object-contain opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {repeatedLogos.map((logo, idx) => (
            <div key={`b-${idx}`} className="flex-shrink-0 mx-8 flex items-center justify-center" style={{ width: '100px', height: '50px' }}>
              <img
                src={logo.url}
                alt={logo.name}
                className="max-h-[44px] max-w-[90px] object-contain opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
