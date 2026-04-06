import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { apiService } from '../services/api';
import { FaIdCard, FaBullhorn, FaUsers, FaCheckCircle } from 'react-icons/fa';
import './Membership.css';

const Membership = () => {
  const { user, signInWithGoogle } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    district: '',
    email: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const districts = [
    "Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul",
    "Erode", "Kallakurichi", "Kanchipuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai",
    "Mayiladuthurai", "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai",
    "Ramanathapuram", "Ranipet", "Salem", "Sivaganga", "Tenkasi", "Thanjavur", "Theni",
    "Thoothukudi", "Tiruchirappalli", "Tirunelveli", "Tirupathur", "Tiruppur", "Tiruvallur",
    "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar"
  ];

  // Auto-fill from Google if available
  React.useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        name: prev.name || user.displayName || '',
        email: prev.email || user.email || ''
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (!formData.name || !formData.mobile || !formData.district) {
        throw new Error('Please fill in all required fields.');
      }

      // Use centralized API service for database registration
      await apiService.registerMember({
        ...formData,
        userId: user ? user.uid : null
      });

      setSuccess(true);
      setFormData({ name: '', mobile: '', district: '', email: '' });

    } catch (err) {
      console.error("Registration Error:", err);
      setError(err.message || 'Database connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="membership-page pb-5">
      <div className="page-header text-white text-center py-5" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/images/leaders.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h1 className="tamil-text pt-4">உறுப்பினர் சேர்க்கை</h1>
        <h2 className="mb-2">Join The Movement</h2>
        <div className="divider mt-3 mx-auto" style={{ backgroundColor: 'var(--accent-yellow)' }}></div>
      </div>

      <div className="container mt-5">
        <div className="row justify-center">
          <div className="col form-container">
            {success ? (
              <div className="success-card glass-panel text-center p-5">
                <FaCheckCircle className="text-red" style={{ fontSize: '5rem', marginBottom: '1rem' }} />
                <h2 className="mb-3">Welcome to Makkal Katchi!</h2>
                <p className="lead">Your membership application has been received successfully.</p>
                <p>Our district coordinator will contact you shortly.</p>
                <button className="btn btn-primary mt-4" onClick={() => setSuccess(false)}>Register Another</button>
              </div>
            ) : (
              <div className="glass-panel membership-card">
                <h3 className="text-center mb-4">Membership Form</h3>

                {!user && (
                  <div className="google-auth-prompt mb-4">
                    <p className="text-center text-gray small mb-2">Save time by signing in</p>
                    <button type="button" className="btn btn-outline w-100 google-btn" onClick={signInWithGoogle}>
                      Sign in with Google
                    </button>
                  </div>
                )}

                {error && <div className="alert alert-error">{error}</div>}

                <form onSubmit={handleSubmit} className="membership-form">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Mobile Number *</label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                      pattern="[0-9]{10}"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Optional"
                    />
                  </div>

                  <div className="form-group">
                    <label>District *</label>
                    <select
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select District</option>
                      {districts.map(d => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>

                  <button type="submit" className="btn btn-primary btn-large w-100 mt-3" disabled={loading}>
                    {loading ? 'Processing...' : 'Register as Member'}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="benefits-section mt-5 pt-5">
          <h2 className="text-center mb-5">Membership Benefits</h2>
          <div className="values-grid">
            <div className="value-card glass-panel">
              <FaIdCard className="value-icon text-red" />
              <h4>Official ID Card</h4>
              <p className="text-gray">Receive your digital and physical membership card.</p>
            </div>
            <div className="value-card glass-panel">
              <FaBullhorn className="value-icon text-red" />
              <h4>Have a Voice</h4>
              <p className="text-gray">Participate in internal polls to shape party policies.</p>
            </div>
            <div className="value-card glass-panel">
              <FaUsers className="value-icon text-red" />
              <h4>Networking</h4>
              <p className="text-gray">Connect with like-minded individuals in your district.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
