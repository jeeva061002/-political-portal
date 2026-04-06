import React from 'react';
import './NewsTicker.css';

const NewsTicker = () => {
  const news = [
    "பண்ருட்டியில் பிரம்மாண்ட பொதுக்கூட்டம் - செந்தமிழன் சீமான் உரை!",
    "விவசாயிகளின் வாழ்வாதாரத்தை காக்க நாம் தமிழர் கட்சி என்றும் முன்னிற்கும்.",
    "கல்வியும் மருத்துவமும் எமது மக்களின் அடிப்படை உரிமைகள் - சீமான்.",
    "மண்ணையும் மக்களையும் காப்போம்! நாம் தமிழர்!",
    "Election 2026: The movement for a sustainable future has begun."
  ];

  return (
    <div className="news-ticker-container">
      <div className="ticker-label">BREAKING</div>
      <div className="ticker-wrapper">
        <div className="ticker-scroll">
          {news.map((item, index) => (
            <span key={index} className="ticker-item">{item}</span>
          ))}
          {/* Duplicate for infinite scroll */}
          {news.map((item, index) => (
            <span key={`dup-${index}`} className="ticker-item">{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
