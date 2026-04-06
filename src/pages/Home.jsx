import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaBriefcase, FaSeedling, FaFemale, FaArrowRight, FaUsers } from 'react-icons/fa';
import HeroSection from '../components/HeroSection';
import Card from '../components/Card';
import ElectionCountdown from '../components/ElectionCountdown';
import { apiService } from '../services/api';
import './Home.css';

const Home = () => {
  const [liveNews, setLiveNews] = useState([]);
  const [memberCount, setMemberCount] = useState(45210); // Initial fallback
  const [loading, setLoading] = useState(true);

  // Data fetching and intersection observer
  useEffect(() => {
    const fetchData = async () => {
      try {
        const news = await apiService.getLiveNews();
        if (news) setLiveNews(news);
        // Note: Real Firestore count would go here
      } catch (err) {
        console.error("Home Data Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

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

  const defaultNews = [
    { id: 1, title: "Massive Rally in Madurai", date: "Oct 15, 2026", content: "Over 5 lakh people gathered to support our leader's vision.", image: "/images/rally.png" },
    { id: 2, title: "Youth Wing Conference", date: "Oct 10, 2026", content: "Key resolutions passed addressing youth unemployment.", image: "/images/rally.png" }
  ];

  return (
    <div className="home-page">
      <HeroSection
        title="எதிர்காலத்தை உருவாக்குவோம்"
        subtitle="For a Prosperous Tamil Nadu"
        description="Empowering education, sustainable agriculture, and youth participation. Be the change you want to see."
        primaryBtnText="Join Now"
        primaryBtnLink="/membership"
        secondaryBtnText="Our Leader"
        secondaryBtnLink="/leader"
        leaderImage="/images/leader.png"
      />

      <div className="countdown-wrap">
        <ElectionCountdown />
      </div>

      {/* Dynamic Member Counter */}
      <section className="live-counter-section text-center py-4">
        <div className="container">
          <div className="glass-panel d-inline-flex p-4 align-center gap-3">
            <FaUsers className="text-red" style={{ fontSize: '2rem' }} />
            <div>
              <h3 className="mb-0 text-white">{memberCount.toLocaleString()}+</h3>
              <p className="mb-0 text-gray small">Verified Members Joined</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ marginTop: '3rem' }}>
        <div className="container">
          <div className="section-header animate-on-scroll text-center">
            <h2 className="tamil-text">எமது நோக்கங்கள் (Our Focus Areas)</h2>
            <div className="divider"></div>
            <p className="mt-3 text-gray">Empowering every section of society for holistic development.</p>
          </div>

          <div className="features-grid">
            <div className="animate-on-scroll" style={{ transitionDelay: '100ms' }}>
              <Card title="Education" description="Free and quality education for all children." icon={FaGraduationCap} variant="icon-only" />
            </div>
            <div className="animate-on-scroll" style={{ transitionDelay: '200ms' }}>
              <Card title="Employment" description="Creating 1 million new jobs in IT and manufacturing." icon={FaBriefcase} variant="icon-only" />
            </div>
            <div className="animate-on-scroll" style={{ transitionDelay: '300ms' }}>
              <Card title="Agriculture" description="Modern farming equipment and better MSP for farmers." icon={FaSeedling} variant="icon-only" />
            </div>
            <div className="animate-on-scroll" style={{ transitionDelay: '400ms' }}>
              <Card title="Women Empowerment" description="Special schemes and safety measures for women." icon={FaFemale} variant="icon-only" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding custom-bg-light">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="tamil-text">சமீபத்திய செய்திகள் (Live News)</h2>
            <div className="divider"></div>
          </div>

          <div className="news-grid">
            {(liveNews.length > 0 ? liveNews : defaultNews).map((item, idx) => (
              <div className="animate-on-scroll" key={item.id} style={{ transitionDelay: `${idx * 100}ms` }}>
                <Card
                  image={item.image || "/images/envi.png"}
                  date={item.date}
                  title={item.title}
                  description={item.content}
                  actionText="Read More"
                  onAction={() => { }}
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link to="/news" className="btn btn-outline animate-on-scroll">
              View All Updates <FaArrowRight style={{ marginLeft: '10px' }} />
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-banner" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(18, 18, 18, 0.9)), url(/images/candicate.png)` }}>
        <div className="container text-center animate-on-scroll">
          <h2 className="text-white mb-4 display-4 tamil-text">எங்களுடன் இணையுங்கள்!</h2>
          <p className="text-white mb-5 lead">Join The Movement. Be the Change you wish to see in our state.</p>
          <Link to="/membership" className="btn btn-primary btn-large">
            Become a Member Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
