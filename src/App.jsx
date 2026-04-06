import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ScrollToTop from './components/ScrollToTop';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NewsTicker from './components/NewsTicker';

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

// Wrapper component to handle transitions via key change
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div key={location.pathname} className="page-transition-wrapper">
      <Routes location={location}>
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
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <div className="app-container d-flex flex-column min-vh-100">
          <NewsTicker />
          <Navbar />
          <main className="flex-grow-1">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
