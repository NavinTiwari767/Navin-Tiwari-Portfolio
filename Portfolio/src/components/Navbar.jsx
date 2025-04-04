import React, { useState } from 'react';
import { CgMenuOreos, CgClose } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // ✅ Using React Router for navigation

  const scrollToSection = (id) => {
    if (id === 'contact') {
      navigate('/contact'); // ✅ Navigate to Contact Form page
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false); // Close mobile menu after click
      }
    }
  };

  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="navbar-start flex items-center gap-4 ml-5">
        <div className="p-[2px] rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-green-500">
          <img 
            src="/mypic.png" 
            alt="Profile" 
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-xl lg:text-3xl font-bold flex items-center gap-1">
            <span className="whitespace-nowrap">Navin Tiwar</span>
            <span className="text-green-500 animate-pulse ">i</span>
          </h2>
          <p className="text-sm font-semibold text-gray-700">Web developer</p>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex ml-100">
        <ul className="menu menu-horizontal gap-6">
          <li><button onClick={() => scrollToSection('home')}>Home</button></li>
          <li><button onClick={() => scrollToSection('about')}>About</button></li>
          <li><button onClick={() => scrollToSection('portfolio')}>Portfolio</button></li>
          <li><button onClick={() => scrollToSection('experience')}>Experience</button></li>
          <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className="navbar-end lg:hidden mr-5">
        <button onClick={() => setMenuOpen(!menuOpen)} className="btn btn-ghost text-2xl">
          {menuOpen ? <CgClose /> : <CgMenuOreos />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-16 right-5 bg-green-500 shadow-lg rounded-lg p-4 z-50">
          <ul className="flex flex-col gap-4">
            <li><button onClick={() => scrollToSection('home')}>Home</button></li>
            <li><button onClick={() => scrollToSection('about')}>About</button></li>
            <li><button onClick={() => scrollToSection('portfolio')}>Portfolio</button></li>
            <li><button onClick={() => scrollToSection('experience')}>Experience</button></li>
            <li><button onClick={() => scrollToSection('contact')}>Contact</button></li> 
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
