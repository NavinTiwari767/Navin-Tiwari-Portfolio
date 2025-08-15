import React, { useState, useEffect } from 'react';
import { CgMenuOreos, CgClose } from 'react-icons/cg';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  // ✅ Toggle Menu
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // ✅ Dark mode toggle
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  // ✅ Apply dark/light mode on body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const scrollToSection = (id) => {
    if (id === 'contact') {
      navigate('/contact');
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
      }
    }
  };

  return (
    <div className="navbar bg-base-100 shadow-md relative dark:bg-gray-900 dark:text-white">
      {/* Left side */}
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
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            Web developer
          </p>
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

      {/* Right side */}
      <div className="navbar-end flex items-center gap-3 mr-5">
        {/* Theme Toggle */}
        <button onClick={toggleDarkMode} className="btn btn-ghost text-xl">
          {darkMode ? <BsSun /> : <BsMoon />}
        </button>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="btn btn-ghost text-2xl lg:hidden">
          {menuOpen ? <CgClose /> : <CgMenuOreos />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-5 bg-green-500 shadow-lg rounded-lg p-4 z-50 dark:bg-gray-800">
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
