import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 md:px-20">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold text-white">Quick Links</h2>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-green-400">About Us</a></li>
              <li><a href="#" className="hover:text-green-400">Contact</a></li>
              <li><a href="#" className="hover:text-green-400">Jobs</a></li>
              <li><a href="#" className="hover:text-green-400">Press Kit</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="text-center">
            <h2 className="text-xl font-bold text-white mb-3">Follow Me</h2>
            <div className="flex justify-center space-x-6">
              <a href="https://www.youtube.com/@CollegeCampus1" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
                YouTube
              </a>
              <a href="https://www.linkedin.com/in/navin-tiwari-b19371290/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                LinkedIn
              </a>
              <a href="https://github.com/NavinTiwari767" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                GitHub
              </a>
              <a href="https://twitter.com/navin_tiwari" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-gray-700 pt-4">
          <p>© {new Date().getFullYear()} Navin Tiwari. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
