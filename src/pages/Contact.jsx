import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending
    setTimeout(() => {
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <div className="contact-page pb-5">
      <div className="page-header text-white text-center py-5" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/images/fight.png.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h1 className="tamil-text pt-4">தொடர்புக்கு (Contact Us)</h1>
        <div className="divider mt-3 mx-auto" style={{ backgroundColor: 'var(--accent-yellow)' }}></div>
      </div>

      <div className="container mt-5">
        <div className="row contact-container">
          {/* Contact Info */}
          <div className="col contact-info glass-panel p-5">
            <h3 className="text-red mb-4">Headquarters</h3>

            <div className="info-item">
              <div className="info-icon"><FaMapMarkerAlt /></div>
              <div className="info-text">
                <h4 className="mb-1">Address</h4>
                <p>இராவணன் குடில், எண்.8. மருத்துவமனை சாலை, செந்தில் நகர், சின்னப்போரூர், <br />சென்னை – 600 116.</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><FaPhoneAlt /></div>
              <div className="info-text">
                <h4 className="mb-1">Phone</h4>
                <p>Office: +91 44 4380 4084</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><FaEnvelope /></div>
              <div className="info-text">
                <h4 className="mb-1">Email</h4>
                <p>naamtamilar.org</p>
              </div>
            </div>

            {/* Map Embed dummy */}
            <div className="map-container mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124406.84077651036!2d80.12877141566373!3d13.047807800000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1655182143093!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col contact-form glass-panel p-5">
            <h3 className="mb-4 text-center">Send us a message</h3>

            {success ? (
              <div className="alert alert-success text-center py-4">
                <h4 className="text-green mb-2">Message Sent!</h4>
                <p>Thank you for reaching out. Our team will get back to you shortly.</p>
                <button className="btn btn-outline mt-3" onClick={() => setSuccess(false)}>Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Your Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label>Email Address *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label>Subject</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
                </div>

                <div className="form-group">
                  <label>Message *</label>
                  <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100 mt-2">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
