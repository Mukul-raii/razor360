import React, { useState } from 'react';
import logo from '../assets/With-Glow-Logo.png';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-primary shadow-sm fixed w-full z-20 py-4 max-sm:py-0"> {/* Changed z-10 to z-20 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <img src={logo} alt="razor360° Logo" className="w-40" />
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="hover:text-yellow-300 px-3 py-2">Features</a>
            <a href="#" className="hover:text-yellow-300 px-3 py-2">Pricing</a>
            <a href="#" className="hover:text-yellow-300 px-3 py-2">About</a>
            <button className="bg-yellow-500 text-primary px-4 py-2 rounded hover:bg-yellow-400">
              Get Started
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-primary z-20 text-white space-y-2 p-4 rounded-lg shadow-lg"> {/* Added padding, shadow, and increased z-index */}
            <a href="#" className="block text-center hover:text-yellow-300 py-2">Features</a>
            <a href="#" className="block text-center hover:text-yellow-300 py-2">Pricing</a>
            <a href="#" className="block text-center hover:text-yellow-300 py-2">About</a>
            <button className="block w-full text-center bg-yellow-500 text-primary py-2 rounded hover:bg-yellow-400">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
