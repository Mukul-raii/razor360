import React, { useState, useEffect } from 'react';
import arr1 from '../assets/arr1.webp';
import arr2 from '../assets/arr2.webp';

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="bg-primary text-white py-12 md:py-16 lg:py-24 min-h-[700px] relative flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <p className="text-base sm:text-lg md:text-xl mb-2 text-yellow-500 font-bold">
          B2B and B2C Scaling Specialists
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
          Fix the Problems that stops your{' '}
          <span className="block sm:inline">business from scaling</span>
        </h1>
        <p className="text-base max-sm:text-sm md:text-xl mb-6 md:mb-8 text-purple-100 max-w-3xl mx-auto">
          Get more <span className="font-bold">signups and demos</span> through the door with higher authority.
          Generate natural links from the most influential sites in B2B SaaS.
        </p>
        <button className="bg-yellow-500 w-full sm:w-auto text-purple-900 px-8 py-3 font-semibold hover:bg-yellow-400 transition-colors rounded-md">
         Book An Apointment
        </button>
      </div>
      {!isMobile && (
        <>
          <img
            src={arr1}
            alt="Decorative arrow 1"
            className="absolute bottom-0 right-0 w-1/4 max-w-xs  mb-4 mr-4 rounded-md opacity-50 md:opacity-100"
          />
          <img
            src={arr2}
            alt="Decorative arrow 2"
            className="absolute bottom-0 left-0 w-1/4 max-w-xs mb-0 ml-0 rounded-md opacity-50 md:opacity-100"
          />
        </>
      )}
    </div>
  );
}