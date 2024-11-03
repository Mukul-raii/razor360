import React from 'react';
import styles from './BrandTicker.module.css';
import logo1 from  "../assets/kk12.png"
import logo2 from  "../assets/Omin.png"

function BrandTicker() {
  const brands = [
    { name: 'LegalZoom', logo: logo1 },
    { name: 'Surfshark', logo: logo2 },
    { name: 'Guru', logo: 'https://via.placeholder.com/100?text=Guru' },
    { name: 'Resume.io', logo: 'https://via.placeholder.com/100?text=Resume.io' },
    { name: 'Aspiration', logo: 'https://via.placeholder.com/100?text=Aspiration' },
    { name: 'Vonage', logo: 'https://via.placeholder.com/100?text=Vonage' },
  ];

  return (
    <div className={`${styles.brandTickerContainer} bg-secondry`}>
      <h3 className="text-center text-gray-700 font-bold mb-8">
        Trusted by ambitious brands like
      </h3>
      <div className={styles.tickerWrapper}>
        <div className={`${styles.ticker} flex justify-center`}>
          {[...brands, ...brands].map((brand, index) => (
            <div key={index} className={styles.tickerItem}>
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="h-8 md:h-10 w-full opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrandTicker;
