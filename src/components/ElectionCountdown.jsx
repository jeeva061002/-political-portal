import React, { useState, useEffect } from 'react';
import './ElectionCountdown.css';

const ElectionCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Target date: March 1, 2026 (Hypothetical Election Start)
    const targetDate = new Date('March 1, 2026 00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-container glass-panel">
      <h3 className="countdown-title">Mission 2026: The Change is Near</h3>
      <div className="countdown-grid">
        <div className="countdown-item">
          <span className="count">{timeLeft.days}</span>
          <span className="label">Days</span>
        </div>
        <div className="countdown-item">
          <span className="count">{timeLeft.hours}</span>
          <span className="label">Hours</span>
        </div>
        <div className="countdown-item">
          <span className="count">{timeLeft.minutes}</span>
          <span className="label">Minutes</span>
        </div>
        <div className="countdown-item">
          <span className="count">{timeLeft.seconds}</span>
          <span className="label">Seconds</span>
        </div>
      </div>
      <p className="countdown-footer">Toward the Dawn of a New Era in Tamil Nadu Politics.</p>
    </div>
  );
};

export default ElectionCountdown;
