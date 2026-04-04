import React from 'react';
import './Timeline.css';

const Timeline = ({ events }) => {
  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
          <div className="timeline-content glass-panel">
            <span className="timeline-date">{event.year}</span>
            <h3 className="timeline-title">{event.title}</h3>
            <p className="timeline-description">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
