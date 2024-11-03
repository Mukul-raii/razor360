import React from 'react';
import logo from '../assets/With-Glow-Logo.png'
import logo1 from '../assets/logo1.png'

function Navbar() {
  return (
    <nav className="bg-primary text-white shadow-sm fixed w-full z-10 h-20 p-3 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-18 items-center">
          <div className="flex-shrink-0 flex flex-row justify-center">
            <img src={logo} className='w-40' alt="" srcset="" />
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#" className="  hover:text-yellow-300  px-3 py-2">Features</a>
              <a href="#" className="  hover:text-yellow-300  px-3 py-2">Pricing</a>
              <a href="#" className="  hover:text-yellow-300  px-3 py-2">About</a>
              <button className="bg-yellow-500 text-primary px-4 py-2 rounded-md hover:bg-yellow-400">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;