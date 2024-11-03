import React from 'react';
import arr1 from '../assets/arr1.webp';
import arr2 from '../assets/arr2.webp';

function Hero() {
  return (
    <div className="bg-primary text-white pt-24 pb-16 h-[700px] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-40">
      <p className="text-lg md:text-xl mb-2 text-yellow-500 outline-none font-bold">
      B2B and B2C Scaling Specialists </p>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
           Fix the Problems that stops your<br /> 
           business from scaling
        </h1>
        <p className="text-lg md:text-xl mb-8 text-purple-100">
  Get more <span className="font-bold">signups and demos</span> through the door with higher authority.<br/> 
  Generate natural links from the most influential sites in B2B SaaS.
</p>

        <button className="bg-yellow-500 w-[231px] text-purple-900 px-8 py-3  font-semibold hover:bg-yellow-400 transition-colors">
          Start Free Trial
        </button>
      </div>
      <img 
        src={arr1} 
        alt="Description of arr1" 
        className="absolute bottom-0 right-0 w-1/3 max-w-xs mb-4 mr-4 rounded-md" 
      />
      <img 
        src={arr2} 
        alt="Description of arr2" 
        className="absolute bottom-0 left-0 w-1/3 max-w-xs mb-0 ml-0 rounded-md" 

      />
    </div>
  );
}

export default Hero;
