import React, { useState } from 'react';
import './TabLayout.css';

const TabLayout = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabs-container">
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-btn ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      <div className="tab-content-container">
        {tabs.map((tab, index) => (
          <div 
            key={index}
            className={`tab-content ${activeTab === index ? 'active' : ''}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabLayout;
