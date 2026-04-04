import React from 'react';
import { FaLandmark, FaBalanceScale, FaShieldAlt, FaLeaf, FaFemale, FaUserGraduate } from 'react-icons/fa';
import './About.css';

const About = () => {
  const coreValues = [
    { title: "Tamil Identity & Pride", icon: FaLandmark, desc: "Protecting and celebrating our rich language, culture, and ancient heritage." },
    { title: "Social Justice & Equality", icon: FaBalanceScale, desc: "Ensuring fair treatment, rights, and equal opportunities for every citizen." },
    { title: "Self-Reliance (Swavalambanam)", icon: FaShieldAlt, desc: "Building a robust local economy and empowering individuals to be completely self-sufficient." },
    { title: "Environmental Responsibility", icon: FaLeaf, desc: "Pledging to protect our natural resources, distinct landscapes, and ecosystems." },
    { title: "Women Empowerment", icon: FaFemale, desc: "Creating avenues for women to lead, succeed, and participate equally in all spheres of life." },
    { title: "Youth Empowerment", icon: FaUserGraduate, desc: "Providing our youth with high-quality education, skills, and real employment opportunities." }
  ];

  return (
    <div className="about-page pb-5">
      {/* Header Banner */}
      <div className="page-header text-white text-center py-5" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/images/flag.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h1 className="tamil-text pt-4">கட்சியை பற்றி (About Us)</h1>
        <div className="divider mt-3 mx-auto"></div>
      </div>

      <div className="container mt-5">
        {/* History Section - Image Left, Text Right */}
        <section className="split-section mb-5">
          <div className="split-image-container glass-panel">
            <img src="/images/candicate.png" alt="Party History" className="split-image" />
          </div>
          <div className="split-content">
            <h2 className="text-red mb-3">Our History</h2>
            <p>Founded on the principles of Tamil identity, self-respect, and social justice, Naam Tamilar Katchi stands as a powerful voice for the people of Tamil Nadu. The movement was built on the belief that governance should reflect the aspirations and rights of the Tamil people.</p>
            <p>From its roots as a strong ideological movement, the party has grown into a dynamic political force, consistently advocating for the protection of Tamil culture, language, and heritage. It emphasizes the importance of environmental conservation, agricultural development, and equal opportunities for all sections of society.</p>
            <p>Over the years, Naam Tamilar Katchi has actively worked towards empowering farmers, supporting youth aspirations, ensuring women's safety and dignity, and promoting sustainable development. The party envisions a self-reliant Tamil Nadu where political power truly belongs to the people.</p>
            <p>With a strong commitment to transparency, integrity, and grassroots engagement, Naam Tamilar Katchi continues to inspire change and work towards a progressive and inclusive future.</p>
            <div className="stats-row mt-4">
              <div className="stat-box">
                <span className="stat-number text-red">14+</span>
                <span className="stat-label">Years of Service</span>
              </div>
              <div className="stat-box">
                <span className="stat-number text-red">0.5M+</span>
                <span className="stat-label">Active Members</span>
              </div>
              <div className="stat-box">
                <span className="stat-number text-red">38</span>
                <span className="stat-label">Districts Covered</span>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section - Alternating Layout */}
        <section className="vision-mission-section my-5">
          <div className="row">
            <div className="col glass-panel p-4 m-2 text-center">
              <h3 className="text-red mb-3">Vision</h3>
              <p>To build a self-reliant and progressive Tamil Nadu that upholds Tamil identity, language, and culture while ensuring social justice, environmental sustainability, and equal opportunities for every citizen.

                The vision is to create a society where governance is transparent, people-centric, and rooted in the values of dignity, equality, and collective growth.</p>
            </div>
            <div className="col glass-panel p-4 m-2 text-center">
              <h3 className="text-red mb-3">Mission</h3>
              <p>The mission of Naam Tamilar Katchi is to protect and promote Tamil language, culture, and heritage while working towards the overall development of society. The party is committed to empowering farmers through sustainable agricultural practices, creating meaningful opportunities for youth, and ensuring the safety, dignity, and equal participation of women. It also focuses on safeguarding natural resources, promoting environmental sustainability, and establishing transparent, corruption-free governance. Through strong grassroots engagement, the mission is to ensure that political power remains in the hands of the people and contributes to building a self-reliant and progressive Tamil Nadu.

                I prefer this response</p>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="core-values-section mt-5 pt-4">
          <div className="text-center mb-5">
            <h2 style={{ color: 'var(--black)' }}>Our Core Values</h2>
            <div className="divider mt-2"></div>
          </div>

          <div className="values-grid">
            {coreValues.map((value, idx) => (
              <div className="value-card glass-panel" key={idx}>
                <div className="value-icon"><value.icon /></div>
                <h4>{value.title}</h4>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
