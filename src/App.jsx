import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { Hero } from './Components/Hero';
import Main from './Components/Main';
import { Footer } from './Components/Footer';

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
      <div className="pt-16"> {/* offset for fixed navbar height */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* other routes */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
