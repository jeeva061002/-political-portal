import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaBriefcase, FaSeedling, FaFemale, FaArrowRight } from 'react-icons/fa';
import HeroSection from '../components/HeroSection';
import Card from '../components/Card';
import './Home.css';

const Home = () => {
  // Simple intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.animate-on-scroll');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="home-page">
      <HeroSection
        title="எதிர்காலத்தை உருவாக்குவோம்"
        subtitle="For a Prosperous Tamil Nadu"
        description="We are committed to the welfare of all people, focusing on education, employment, agriculture, and women's empowerment. Join hands with us to build a better tomorrow."
        primaryBtnText="Join Now"
        primaryBtnLink="/membership"
        secondaryBtnText="Our Leader"
        secondaryBtnLink="/leader"
        leaderImage="/images/leader.png"
        logoWatermark="/images/party_logo.png"
      />

      {/* Focus Areas Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="tamil-text">எமது நோக்கங்கள் (Our Focus Areas)</h2>
            <div className="divider"></div>
            <p className="mt-3 text-gray">Empowering every section of society for holistic development.</p>
          </div>

          <div className="features-grid">
            <div className="animate-on-scroll" style={{ transitionDelay: '100ms' }}>
              <Card
                title="Education"
                description="Free and quality education for all children, with modernized infrastructure in government schools."
                icon={FaGraduationCap}
                variant="icon-only"
              />
            </div>
            <div className="animate-on-scroll" style={{ transitionDelay: '200ms' }}>
              <Card
                title="Employment"
                description="Creating 1 million new jobs in IT and manufacturing sectors across Tier 2 and Tier 3 cities."
                icon={FaBriefcase}
                variant="icon-only"
              />
            </div>
            <div className="animate-on-scroll" style={{ transitionDelay: '300ms' }}>
              <Card
                title="Agriculture"
                description="Subsidized loans, modern farming equipment, and better MSP for our farmers."
                icon={FaSeedling}
                variant="icon-only"
              />
            </div>
            <div className="animate-on-scroll" style={{ transitionDelay: '400ms' }}>
              <Card
                title="Women Empowerment"
                description="Special schemes for women entrepreneurs and guaranteed safety measures across the state."
                icon={FaFemale}
                variant="icon-only"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="section-padding custom-bg-light">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="tamil-text">சமீபத்திய செய்திகள் (Latest News)</h2>
            <div className="divider"></div>
          </div>

          <div className="news-grid">
            <div className="animate-on-scroll">
              <Card
                image="/images/rally.png"
                date="October 15, 2026"
                title="Massive Rally in Madurai"
                description="Over 5 lakh people gathered to support our leader's vision for a new Tamil Nadu. The energy was unprecedented."
                actionText="Read More"
                onAction={() => { }}
              />
            </div>
            <div className="animate-on-scroll" style={{ transitionDelay: '100ms' }}>
              <Card
                image="/images/rally.png"
                date="October 10, 2026"
                title="Youth Wing Conference"
                description="Key resolutions passed addressing youth unemployment and educational reforms needed immediately."
                actionText="Read More"
                onAction={() => { }}
              />
            </div>
            <div className="animate-on-scroll" style={{ transitionDelay: '200ms' }}>
              <Card
                image="/images/rally.png"
                date="October 05, 2026"
                title="Farmers Relief Fund Announced"
                description="Party has established a special ₹100 crore fund to assist farmers affected by the recent unseasonal rains."
                actionText="Read More"
                onAction={() => { }}
              />
            </div>
          </div>

          <div className="text-center mt-4">
            <Link to="/news" className="btn btn-outline animate-on-scroll">
              View All Updates <FaArrowRight style={{ marginLeft: '10px' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* Big CTA Banner */}
      <section className="cta-banner" style={{ backgroundImage: `linear-gradient(rgba(211, 47, 47, 0.9), rgba(183, 28, 28, 0.9)), url(/images/rally.png)` }}>
        <div className="container text-center animate-on-scroll">
          <h2 className="text-white mb-4 display-4 tamil-text">எங்களுடன் இணையுங்கள்!</h2>
          <p className="text-white mb-5 lead">Join The Movement. Be the Change you wish to see in our state. Your voice matters, and together we can overcome any obstacle.</p>
          <Link to="/membership" className="btn btn-black btn-large">
            Become a Member Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
