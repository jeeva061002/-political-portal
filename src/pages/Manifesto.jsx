import React from 'react';
import { FaSeedling, FaUserGraduate, FaFemale, FaBriefcase, FaLeaf, FaHospital, FaLandmark, FaFish } from 'react-icons/fa';
import TabLayout from '../components/TabLayout';
import './Manifesto.css';

const Manifesto = () => {
  const manifestoData = [
    {
      label: "Agriculture",
      content: (
        <div className="manifesto-content panel-slide-in">
          <div className="text-center mb-4">
            <FaSeedling className="manifesto-icon text-red" />
            <h3 className="mt-3">🌾 Agriculture & Farmers</h3>
          </div>
          <ul className="manifesto-list">
            <li>Minimum Support Price (MSP) guarantee for all crops</li>
            <li>Interest-free loans for farmers</li>
            <li>Modern irrigation & water management systems</li>
            <li>Protection of agricultural lands</li>
          </ul>
        </div>
      )
    },
    {
      label: "Education",
      content: (
        <div className="manifesto-content panel-slide-in">
          <div className="text-center mb-4">
            <FaUserGraduate className="manifesto-icon text-red" />
            <h3 className="mt-3">👩‍🎓 Education & Youth</h3>
          </div>
          <ul className="manifesto-list">
            <li>Free & quality education for all</li>
            <li>Skill development programs for employment</li>
            <li>Support for startups and innovation</li>
            <li>Transparent recruitment process</li>
          </ul>
        </div>
      )
    },
    {
      label: "Women",
      content: (
        <div className="manifesto-content panel-slide-in">
          <div className="text-center mb-4">
            <FaFemale className="manifesto-icon text-red" />
            <h3 className="mt-3">👩 Women Empowerment</h3>
          </div>
          <ul className="manifesto-list">
            <li>Equal pay and opportunities</li>
            <li>Strong safety laws & fast-track courts</li>
            <li>Financial support for women entrepreneurs</li>
          </ul>
        </div>
      )
    },
    {
      label: "Economy",
      content: (
        <div className="manifesto-content panel-slide-in">
          <div className="text-center mb-4">
            <FaBriefcase className="manifesto-icon text-red" />
            <h3 className="mt-3">💼 Employment & Economy</h3>
          </div>
          <ul className="manifesto-list">
            <li>Job creation through local industries</li>
            <li>Promote small & medium businesses</li>
            <li>Reduce unemployment through skill training</li>
          </ul>
        </div>
      )
    },
    {
      label: "Environment",
      content: (
        <div className="manifesto-content panel-slide-in">
          <div className="text-center mb-4">
            <FaLeaf className="manifesto-icon text-red" />
            <h3 className="mt-3">🌍 Environment & Sustainability</h3>
          </div>
          <ul className="manifesto-list">
            <li>Ban harmful industrial pollution</li>
            <li>Water conservation projects</li>
            <li>Increase green cover across Tamil Nadu</li>
          </ul>
        </div>
      )
    },
    {
      label: "Healthcare",
      content: (
        <div className="manifesto-content panel-slide-in">
          <div className="text-center mb-4">
            <FaHospital className="manifesto-icon text-red" />
            <h3 className="mt-3">🏥 Healthcare</h3>
          </div>
          <ul className="manifesto-list">
            <li>Free basic healthcare services</li>
            <li>Improve government hospitals</li>
            <li>Affordable medicines for all</li>
          </ul>
        </div>
      )
    },
    {
      label: "Governance",
      content: (
        <div className="manifesto-content panel-slide-in">
          <div className="text-center mb-4">
            <FaLandmark className="manifesto-icon text-red" />
            <h3 className="mt-3">🏛️ Governance</h3>
          </div>
          <ul className="manifesto-list">
            <li>Corruption-free administration</li>
            <li>Digital transparency in government services</li>
            <li>Power to local bodies (grassroots governance)</li>
          </ul>
        </div>
      )
    },
    {
      label: "Fishermen",
      content: (
        <div className="manifesto-content panel-slide-in">
          <div className="text-center mb-4">
            <FaFish className="manifesto-icon text-red" />
            <h3 className="mt-3">🐟 Fishermen Welfare</h3>
          </div>
          <ul className="manifesto-list">
            <li>Safety measures for fishermen</li>
            <li>Financial aid & modern equipment</li>
            <li>Protection of coastal resources</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <div className="manifesto-page pb-5">
      <div className="page-header text-white text-center py-5" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/images/manifesto_bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h1 className="tamil-text pt-4">தேர்தல் அறிக்கை</h1>
        <h2 className="mb-2">Election Manifesto 2026</h2>
        <div className="divider mt-3 mx-auto" style={{ backgroundColor: 'white' }}></div>
      </div>

      <div className="container mt-5">
        <div className="manifesto-intro text-center mb-5 max-w-800 mx-auto">
          <p className="lead text-gray">
            Our manifesto is not just a list of promises, but a binding vision document. 
            We have crafted this after conducting thousands of townhalls and listening to the voices of the people.
          </p>
        </div>

        <div className="glass-panel p-4 p-md-5">
          <TabLayout tabs={manifestoData} />
        </div>
      </div>
    </div>
  );
};

export default Manifesto;
