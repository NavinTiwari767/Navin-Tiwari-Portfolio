import React from 'react';
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
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <div id="home"><Home /></div>
              <div id="about"><About /></div>
              <div id="portfolio"><Portfolio /></div>
              <div id="experience"><Experiance /></div>
              <div id="projects"><Project /></div>
            </>
          } />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
};

export default App;
