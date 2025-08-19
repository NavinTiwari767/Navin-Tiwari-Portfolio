import React, { useState, useEffect } from 'react';
import { CgMenuOreos, CgClose } from 'react-icons/cg';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem('theme') === 'dark'
  );
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

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
    <div className="navbar bg-white dark:bg-gray-900 dark:text-white shadow-md sticky top-0 z-50 transition-colors duration-300">
      {/* Left: Logo */}
      <div className="navbar-start flex items-center gap-2 sm:gap-4 ml-2 sm:ml-4">
        <div className="p-[2px] rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-green-500 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
          <img
            src="/mypic.png"
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div className="leading-tight">
          <h2 className="text-base sm:text-xl lg:text-3xl font-bold flex items-center gap-1">
            <span className="whitespace-nowrap">Navin Tiwar</span>
            <span className="text-green-500 animate-pulse">i</span>
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
            Web developer
          </p>
        </div>
      </div>

      {/* Center: Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-6 px-1">
          <li><button onClick={() => scrollToSection('home')}>Home</button></li>
          <li><button onClick={() => scrollToSection('about')}>About</button></li>
          <li><button onClick={() => scrollToSection('portfolio')}>Portfolio</button></li>
          <li><button onClick={() => scrollToSection('experience')}>Experience</button></li>
          <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
        </ul>
      </div>

      {/* Right: Icons */}
      <div className="navbar-end flex items-center gap-2 sm:gap-3 mr-2 sm:mr-4">
        {/* Theme Toggle */}
        <button onClick={toggleDarkMode} className="btn btn-ghost text-xl">
          {darkMode ? <BsSun /> : <BsMoon />}
        </button>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="btn btn-ghost text-2xl lg:hidden">
          {menuOpen ? <CgClose /> : <CgMenuOreos />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full right-5 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 z-50 lg:hidden">
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
