import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { Hero } from './Components/Hero';
import Main from './Components/Main';
import { Footer } from './Components/Footer';
import WhyUs from './Components/Whyus';
import Contact from './Components/Contact';

function HomePage() {
  return (
    <>
      <Hero />
      <Main />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-16"> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/whyus" element={<WhyUs />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
