import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = ({ 
  title, 
  subtitle, 
  description, 
  primaryBtnText, 
  primaryBtnLink,
  secondaryBtnText,
  secondaryBtnLink,
  bgImage,
  leaderImage,
  logoWatermark
}) => {
  return (
    <div className="hero-container" style={{ backgroundImage: bgImage ? `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${bgImage})` : 'var(--dark-bg)' }}>
      {logoWatermark && (
        <img src={logoWatermark} alt="Watermark" className="hero-watermark animate-fadeIn" />
      )}
      
      <div className="container hero-content">
        <div className="hero-text animate-slideUp">
          <h1 className="hero-title tamil-text">{title}</h1>
          {subtitle && <h2 className="hero-subtitle">{subtitle}</h2>}
          {description && <p className="hero-description">{description}</p>}
          
          <div className="hero-btns">
            {primaryBtnText && primaryBtnLink && (
              <Link to={primaryBtnLink} className="btn btn-primary btn-large">
                {primaryBtnText}
              </Link>
            )}
            {secondaryBtnText && secondaryBtnLink && (
              <Link to={secondaryBtnLink} className="btn btn-outline btn-large white-outline">
                {secondaryBtnText}
              </Link>
            )}
          </div>
        </div>
        
        {leaderImage && (
          <div className="hero-image-wrap animate-fadeIn">
            <img src={leaderImage} alt="Leader" className="hero-leader-image" />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
