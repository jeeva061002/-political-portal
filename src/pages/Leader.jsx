import React from 'react';
import { FaUsers, FaChild, FaVoteYea, FaTractor, FaMicrophoneAlt, FaLeaf } from 'react-icons/fa';
import Timeline from '../components/Timeline';
import './Leader.css';

const Leader = () => {
  const bioEvents = [
    { year: "2000s", title: "Ideology", description: "Voiced strong support for Tamil identity." },
    { year: "2010", title: "Political Entry", description: "Re-launched Naam Tamilar Katchi." },
    { year: "2016", title: "Elections", description: "First major electoral participation." },
    { year: "2019", title: "Growth", description: "Expanded presence in parliamentary elections." },
    { year: "2021", title: "Full Contest", description: "Contested all constituencies." },
    { year: "Present", title: "Leadership", description: "Leading youth-driven political movement." }
  ];

  return (
    <div className="leader-page">
      {/* Hero Banner */}
      <div className="leader-hero" style={{ backgroundImage: 'linear-gradient(to right, var(--black), transparent), url(/images/leaders.png)' }}>
        <div className="container">
          <div className="leader-hero-content animate-slideUp">
            <h1 className="tamil-text text-white">எங்கள் தலைவர்</h1>
            <h2 className="text-red">Senthamizhan Seeman</h2>
            <p className="text-white lead mt-3">"Political Reform, Governance by the People"</p>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        {/* Achievements Section */}
        <section className="achievements-section text-center">
          <h2>Key Milestones</h2>

          <div className="achievements-grid">
            <div className="achievement-item glass-panel">
              <div className="icon-wrap"><FaUsers /></div>
              <h4 className="mt-3">Youth Mobilization</h4>
              <p className="text-gray">Engaging and inspiring the younger generation to take charge.</p>
            </div>
            <div className="achievement-item glass-panel">
              <div className="icon-wrap"><FaChild /></div>
              <h4 className="mt-3">Grassroots Movement</h4>
              <p className="text-gray">Building a strong political foundation directly from the villages.</p>
            </div>
            <div className="achievement-item glass-panel">
              <div className="icon-wrap"><FaVoteYea /></div>
              <h4 className="mt-3">Electoral Presence</h4>
              <p className="text-gray">Establishing a formidable and growing footprint in elections.</p>
            </div>
            <div className="achievement-item glass-panel">
              <div className="icon-wrap"><FaTractor /></div>
              <h4 className="mt-3">Voice of Farmers</h4>
              <p className="text-gray">Relentless advocacy for agricultural rights and farmer welfare.</p>
            </div>
            <div className="achievement-item glass-panel">
              <div className="icon-wrap"><FaMicrophoneAlt /></div>
              <h4 className="mt-3">Powerful Oratory</h4>
              <p className="text-gray">Connecting with the masses through compelling, fiery speeches.</p>
            </div>
            <div className="achievement-item glass-panel">
              <div className="icon-wrap"><FaLeaf /></div>
              <h4 className="mt-3">Environmental Advocacy</h4>
              <p className="text-gray">Championing policies that protect our natural resources.</p>
            </div>
          </div>
        </section>

        {/* Timeline Biography */}
        <section className="biography-section mb-5 pb-5">
          <div className="text-center mb-5">
            <h2>Political Journey</h2>
            <div className="divider mt-2"></div>
          </div>

          <Timeline events={bioEvents} />
        </section>

        {/* Media Section */}
        <section className="media-section mb-5 pb-5">
          <div className="text-center mb-5">
            <h2>Media & Gallery</h2>
            <div className="divider mt-2"></div>
          </div>

          <div className="media-grid">
            {/* YouTube Embed */}
            <div className="video-container glass-panel p-2">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/aZUtF7EWTUs"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            </div>

            {/* Photo Gallery Grid */}
            <div className="photo-gallery">
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/da/Seeman_%28politician%29.jpg" alt="Seeman 1" className="gallery-img" />
              <img src="https://upload.wikimedia.org/wikipedia/en/2/29/Naam_Tamilar_Katchi_logo.png" alt="Party Logo" className="gallery-img" style={{ objectFit: 'contain', backgroundColor: 'rgba(255, 255, 255, 0.05)' }} />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Seeman.jpg" alt="Seeman Speech" className="gallery-img" />
              <img src="https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=800&auto=format&fit=crop" alt="Rally Crowd" className="gallery-img" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Leader;
