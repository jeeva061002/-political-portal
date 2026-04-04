import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ScrollToTop from './components/ScrollToTop';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Leader from './pages/Leader';
import Manifesto from './pages/Manifesto';
import News from './pages/News';
import Membership from './pages/Membership';
import District from './pages/District';
import Programs from './pages/Programs';
import ElectionData from './pages/ElectionData';
import SocialMedia from './pages/SocialMedia';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <div className="app-container d-flex flex-column min-vh-100">
          <Navbar />
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/leader" element={<Leader />} />
              <Route path="/manifesto" element={<Manifesto />} />
              <Route path="/news" element={<News />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/district" element={<District />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/election-data" element={<ElectionData />} />
              <Route path="/social-media" element={<SocialMedia />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
