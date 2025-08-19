import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experiance from './components/Experiance';
import Footer from './components/Footer';
import Project from './components/Project';
import Contact from './components/Contact';

const App = () => {

  // Optional: You can add auto-detect system dark mode preference
  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <Router>
      <div className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <main className="space-y-12">
                <section id="home"><Home /></section>
                <section id="about"><About /></section>
                <section id="portfolio"><Portfolio /></section>
                <section id="experience"><Experiance /></section>
                <section id="projects"><Project /></section>
              </main>
            }
          />

          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
