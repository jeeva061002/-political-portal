import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import { useAuth } from '../contexts/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user, signInWithGoogle, signOut } = useAuth();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Leader', path: '/leader' },
    { name: 'Programs', path: '/programs' },
    { name: 'News', path: '/news' },
    { name: 'District', path: '/district' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        <div className="navbar-branding">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src="/images/logo.png" alt="Party Logo" className="logo-img" />
          </Link>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          {navLinks.map((link, index) => (
            <li className="nav-item" key={index}>
              <Link
                to={link.path}
                className={`nav-links ${location.pathname === link.path ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="nav-item mobile-only">
            <Link to="/membership" className="nav-links" onClick={closeMobileMenu}>
              Join Now
            </Link>
          </li>
        </ul>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <div className="navbar-auth-desktop">
          {user ? (
            <div className="user-profile">
              <FaUserCircle className="user-icon" />
              <button className="btn btn-outline" onClick={signOut}>Logout</button>
            </div>
          ) : (
            <button className="btn btn-outline" onClick={signInWithGoogle}>Login</button>
          )}
          <Link to="/membership" className="btn btn-primary join-btn">
            Join Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
