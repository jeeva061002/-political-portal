import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container bg-black">
      <div className="container footer-content">
        <div className="footer-col">
          <h3 className="footer-title tamil-text">நாம் தமிழர் கட்சி</h3>
          <p className="footer-desc">
            A political movement dedicated to the progress and welfare of Tamil Nadu. Join us in building a better future together.
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon"><FaFacebook /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
            <a href="#" className="social-icon"><FaYoutube /></a>
          </div>
        </div>

        <div className="footer-col">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/leader">Our Leader</Link></li>
            <li><Link to="/manifesto">Manifesto</Link></li>
            <li><Link to="/news">News & Events</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-title">Get Involved</h3>
          <ul className="footer-links">
            <li><Link to="/membership">Join Membership</Link></li>
            <li><Link to="/programs">Volunteer Programs</Link></li>
            <li><Link to="/election-data">Election Data</Link></li>
            <li><Link to="/district">District Committees</Link></li>
            <li><Link to="/social-media">Social Hub</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-title">Contact Us</h3>
          <ul className="footer-contact">
            <li>
              <FaMapMarkerAlt className="contact-icon" />
              <span>இராவணன் குடில், எண்.8. மருத்துவமனை சாலை, செந்தில் நகர், சின்னப்போரூர், சென்னை – 600 116.</span>
            </li>
            <li>
              <FaPhoneAlt className="contact-icon" />
              <span> +91 44 4380 4084</span>
            </li>
            <li>
              <FaEnvelope className="contact-icon" />
              <span>naamtamilar.org</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Naam Tamilar Katchi. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
