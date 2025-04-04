import React from "react";
import { FaYoutube, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 md:px-20">
        {/* Social Media Links */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-wide animate-pulse">Let's Connect 🚀</h2>
          <div className="flex justify-center space-x-8">
            <a href="https://www.youtube.com/@CollegeCampus1" target="_blank" rel="noopener noreferrer" className="text-3xl transition transform hover:scale-125 hover:text-red-500 duration-300">
              <FaYoutube />
            </a>
            <a href="https://www.linkedin.com/in/navin-tiwari-b19371290/" target="_blank" rel="noopener noreferrer" className="text-3xl transition transform hover:scale-125 hover:text-blue-500 duration-300">
              <FaLinkedin />
            </a>
            <a href="https://github.com/NavinTiwari767" target="_blank" rel="noopener noreferrer" className="text-3xl transition transform hover:scale-125 hover:text-gray-300 duration-300">
              <FaGithub />
            </a>
            <a href="https://twitter.com/navin_tiwari" target="_blank" rel="noopener noreferrer" className="text-3xl transition transform hover:scale-125 hover:text-blue-400 duration-300">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-gray-700 pt-6">
          <p className="text-lg font-semibold">
            Made with 💙 by <span className="text-green-400 font-extrabold tracking-wider">Navin Tiwari</span> | © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
