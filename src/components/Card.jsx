import React from 'react';
import './Card.css';

const Card = ({ image, title, description, icon: Icon, date, actionText, onAction, children, variant = 'default' }) => {
  return (
    <div className={`card card-${variant} glass-panel`}>
      {image && (
        <div className="card-image-wrap">
          <img src={image} alt={title} className="card-image" />
        </div>
      )}
      <div className="card-content">
        {Icon && <div className="card-icon"><Icon /></div>}
        {date && <span className="card-date">{date}</span>}
        <h3 className="card-title tamil-text">{title}</h3>
        {description && <p className="card-description">{description}</p>}
        {children}
        {actionText && (
          <button className="btn btn-outline card-btn" onClick={onAction}>
            {actionText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
