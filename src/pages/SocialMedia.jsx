import React from 'react';
import { FaTwitter, FaHeart, FaRetweet, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import './SocialMedia.css';

const SocialMedia = () => {
  const tweets = [
    { id: 1, handle: "@SeemanOfficial", name: "Seeman", time: "2h", text: "தமிழ் நிலத்தின் உரிமையை மீட்டெடுக்கவும், மண்ணையும் மக்களையும் காக்கவும் நாம் தமிழர் பிள்ளைகள் களத்தில் என்றும் முன்னிற்போம்! 🌾 #நாம்_தமிழர் #சீமான்", likes: "15.2K", retweets: "4.1K" },
    { id: 2, handle: "@NaamTamilarOrg", name: "Naam Tamilar Katchi", time: "5h", text: "விவசாயத்தைப் பாதுகாப்போம்! நீர் நிலைகளை மீட்டெடுப்போம்! தற்சார்பு பொருளாதாரமே நம் இலக்கு. #SaveAgriculture #NTK2026", likes: "12.4K", retweets: "5.2K" },
    { id: 3, handle: "@SeemanOfficial", name: "Seeman", time: "1d", text: "கல்வியும் மருத்துவமும் வணிகமல்ல, அவை மக்களின் அடிப்படை உரிமைகள். அதை இலவசமாக வழங்குவதே எமது முதல் வாக்குறுதி.", likes: "22K", retweets: "8.5K" }
  ];

  return (
    <div className="social-page pb-5">
      <div className="page-header bg-black text-white text-center py-5">
        <h1 className="tamil-text pt-4">சமூக ஊடகங்கள்</h1>
        <h2 className="mb-2">Social Hub</h2>
        <div className="divider mt-3 mx-auto"></div>
      </div>

      <div className="container mt-5">

        {/* Latest Video Section */}
        <section className="mb-5">
          <h3 className="mb-4 text-center">Latest from Official Channel</h3>
          <div className="video-hero-wrapper glass-panel p-2 mx-auto" style={{ maxWidth: '900px' }}>
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/vJ_A-c65_OA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: '8px' }}>
            </iframe>
          </div>
          <div className="text-center mt-3">
            <a href="https://www.youtube.com/@SeemanOfficial" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ borderColor: '#FF0000', color: '#FF0000' }}>
              <FaYoutube className="me-2" /> Subscribe to Seeman Official
            </a>
          </div>
        </section>

        <div className="row mt-5 pt-4">
          {/* Instagram Grid (Left side) */}
          <div className="col-md-7 mb-4">
            <h3 className="mb-4"><span style={{ color: '#E1306C' }}>Instagram</span> Updates</h3>
            <div className="insta-grid">
              <img src="/images/leader.png" alt="Insta 1" className="insta-img" />
              <img src="/images/agri1.png" alt="Insta 2" className="insta-img" />
              <img src="/images/agri.png" alt="Insta 3" className="insta-img" />
              <img src="/images/hos.png" alt="Insta 4" className="insta-img" />
              <img src="/images/envi.png" alt="Insta 5" className="insta-img" />
              <img src="/images/our_leader.png" alt="Insta 6" className="insta-img" />
            </div>
            <div className="text-center mt-3">
              <a href="https://www.instagram.com/naamtamilarorg" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ borderColor: '#E1306C', color: '#E1306C' }}>
                <FaInstagram className="me-2" /> Follow @naamtamilarorg
              </a>
            </div>
          </div>

          {/* Twitter Feed (Right side) */}
          <div className="col-md-5">
            <h3 className="mb-4"><span style={{ color: '#1DA1F2' }}>X (Twitter)</span> Feed</h3>
            <div className="twitter-feed">
              {tweets.map(tweet => (
                <div key={tweet.id} className="tweet-card glass-panel mb-3 p-3">
                  <div className="tweet-header">
                    <div className="tweet-avatar"></div>
                    <div className="tweet-user-info">
                      <strong>{tweet.name}</strong> <span className="text-gray">{tweet.handle} • {tweet.time}</span>
                    </div>
                    <FaTwitter style={{ color: '#1DA1F2', marginLeft: 'auto' }} />
                  </div>
                  <p className="tweet-text mt-2">{tweet.text}</p>
                  <div className="tweet-actions text-gray mt-3">
                    <span><FaHeart className="me-1" /> {tweet.likes}</span>
                    <span style={{ marginLeft: '20px' }}><FaRetweet className="me-1" /> {tweet.retweets}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-3">
              <a href="https://twitter.com/SeemanOfficial" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ borderColor: '#1DA1F2', color: '#1DA1F2' }}>
                <FaTwitter className="me-2" /> Follow @SeemanOfficial
              </a>
            </div>
          </div>
        </div>

        {/* Facebook Section */}
        <section className="mt-5 pt-5 mb-5">
          <div className="container">
            <div className="glass-panel facebook-card p-5 d-flex flex-column align-center justify-center text-center bg-white mx-auto" style={{ maxWidth: '800px', width: '100%' }}>
              <FaFacebook style={{ fontSize: '4.5rem', color: '#1877F2', marginBottom: '1.5rem' }} />
              <h2 className="mb-3">Official Facebook Page</h2>
              <p className="text-gray mb-4 max-w-600 mx-auto" style={{ fontSize: '1.1rem' }}>Get daily news updates, press releases, and event live streams directly from our official Facebook community.</p>
              <a href="https://www.facebook.com/NaamTamilarOfficial" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large" style={{ backgroundColor: '#1877F2', borderColor: '#1877F2', padding: '15px 40px' }}>
                Visit Facebook Page
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SocialMedia;
