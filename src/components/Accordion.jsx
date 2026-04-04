import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './Accordion.css';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div 
          className={`accordion-item ${activeIndex === index ? 'active' : ''}`} 
          key={index}
        >
          <div className="accordion-header" onClick={() => toggleAccordion(index)}>
            <h3 className="accordion-title">{item.question}</h3>
            <div className="accordion-icon">
              {activeIndex === index ? <FaMinus /> : <FaPlus />}
            </div>
          </div>
          <div 
            className="accordion-content"
            style={{ 
              maxHeight: activeIndex === index ? '500px' : '0',
              opacity: activeIndex === index ? 1 : 0
            }}
          >
            <div className="accordion-body">
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
