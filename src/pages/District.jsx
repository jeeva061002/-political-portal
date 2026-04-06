import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaUserTie, FaBuilding } from 'react-icons/fa';
import './District.css';

const District = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeDistrict, setActiveDistrict] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const districtData = [
    { name: "Ariyalur", leader: "Arun Kumar", contact: "9876500001", email: "ariyalur@makkalkatchi.org" },
    { name: "Chengalpattu", leader: "Balaji", contact: "9876500002", email: "chengalpattu@makkalkatchi.org" },
    { name: "Chennai", leader: "Anbu Selvan", contact: "9876543210", email: "chennai@makkalkatchi.org" },
    { name: "Coimbatore", leader: "Vigneshwaran", contact: "9876543212", email: "covai@makkalkatchi.org" },
    { name: "Cuddalore", leader: "Dinesh", contact: "9876500005", email: "cuddalore@makkalkatchi.org" },
    { name: "Dharmapuri", leader: "Elango", contact: "9876500006", email: "dharmapuri@makkalkatchi.org" },
    { name: "Dindigul", leader: "Farooq", contact: "9876500007", email: "dindigul@makkalkatchi.org" },
    { name: "Erode", leader: "Ganesh", contact: "9876500008", email: "erode@makkalkatchi.org" },
    { name: "Kallakurichi", leader: "Hari", contact: "9876500009", email: "kallakurichi@makkalkatchi.org" },
    { name: "Kanchipuram", leader: "Ilangovan", contact: "9876500010", email: "kanchipuram@makkalkatchi.org" },
    { name: "Kanyakumari", leader: "Jeeva", contact: "9876500011", email: "kanyakumari@makkalkatchi.org" },
    { name: "Karur", leader: "Karthik", contact: "9876500012", email: "karur@makkalkatchi.org" },
    { name: "Krishnagiri", leader: "Lakshmanan", contact: "9876500013", email: "krishnagiri@makkalkatchi.org" },
    { name: "Madurai", leader: "Muthu Pandi", contact: "9876543211", email: "madurai@makkalkatchi.org" },
    { name: "Mayiladuthurai", leader: "Naveen", contact: "9876500015", email: "mayiladuthurai@makkalkatchi.org" },
    { name: "Nagapattinam", leader: "Om Prakash", contact: "9876500016", email: "nagapattinam@makkalkatchi.org" },
    { name: "Namakkal", leader: "Prabhu", contact: "9876500017", email: "namakkal@makkalkatchi.org" },
    { name: "Nilgiris", leader: "Quadir", contact: "9876500018", email: "nilgiris@makkalkatchi.org" },
    { name: "Perambalur", leader: "Ramesh", contact: "9876500019", email: "perambalur@makkalkatchi.org" },
    { name: "Pudukkottai", leader: "Sathish", contact: "9876500020", email: "pudukkottai@makkalkatchi.org" },
    { name: "Ramanathapuram", leader: "Thiruvalavan", contact: "9876500021", email: "ramanathapuram@makkalkatchi.org" },
    { name: "Ranipet", leader: "Udhaya", contact: "9876500022", email: "ranipet@makkalkatchi.org" },
    { name: "Salem", leader: "Senthil Kumar", contact: "9876543214", email: "salem@makkalkatchi.org" },
    { name: "Sivaganga", leader: "Velmurugan", contact: "9876500024", email: "sivaganga@makkalkatchi.org" },
    { name: "Tenkasi", leader: "Wellingdon", contact: "9876500025", email: "tenkasi@makkalkatchi.org" },
    { name: "Thanjavur", leader: "Xavier", contact: "9876500026", email: "thanjavur@makkalkatchi.org" },
    { name: "Theni", leader: "Yuvan", contact: "9876500027", email: "theni@makkalkatchi.org" },
    { name: "Thoothukudi", leader: "Zakir", contact: "9876500028", email: "thoothukudi@makkalkatchi.org" },
    { name: "Tiruchirappalli", leader: "Karthik Raj", contact: "9876543213", email: "trichy@makkalkatchi.org" },
    { name: "Tirunelveli", leader: "Murugan", contact: "9876543215", email: "nellai@makkalkatchi.org" },
    { name: "Tirupathur", leader: "Ashok", contact: "9876500031", email: "tirupathur@makkalkatchi.org" },
    { name: "Tiruppur", leader: "Bharath", contact: "9876500032", email: "tiruppur@makkalkatchi.org" },
    { name: "Tiruvallur", leader: "Chandran", contact: "9876500033", email: "tiruvallur@makkalkatchi.org" },
    { name: "Tiruvannamalai", leader: "Devaraj", contact: "9876500034", email: "tiruvannamalai@makkalkatchi.org" },
    { name: "Tiruvarur", leader: "Elangovan", contact: "9876500035", email: "tiruvarur@makkalkatchi.org" },
    { name: "Vellore", leader: "Faizal", contact: "9876500036", email: "vellore@makkalkatchi.org" },
    { name: "Viluppuram", leader: "Gokul", contact: "9876500037", email: "viluppuram@makkalkatchi.org" },
    { name: "Virudhunagar", leader: "Hariharan", contact: "9876500038", email: "virudhunagar@makkalkatchi.org" }
  ];

  const getLevenshteinDistance = (a, b) => {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;
    const matrix = [];
    for (let i = 0; i <= b.length; i++) { matrix[i] = [i]; }
    for (let j = 0; j <= a.length; j++) { matrix[0][j] = j; }
    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) == a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1));
        }
      }
    }
    return matrix[b.length][a.length];
  };

  const filteredDistricts = districtData.filter(d =>
    d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.leader.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setActiveDistrict('');
      setSuggestion('');
    } else {
      if (filteredDistricts.length === 1) {
        setActiveDistrict(filteredDistricts[0].name);
        setSuggestion('');
      } else if (filteredDistricts.length === 0 && searchTerm.length > 2) {
        let bestMatch = '';
        let minDistance = Infinity;

        districtData.forEach(d => {
          const dist = getLevenshteinDistance(searchTerm.toLowerCase(), d.name.toLowerCase());
          if (dist < minDistance) {
            minDistance = dist;
            bestMatch = d.name;
          }
        });

        if (minDistance <= 3) {
          setSuggestion(bestMatch);
        } else {
          setSuggestion('');
        }
      } else {
        setSuggestion('');
      }
    }
  }, [searchTerm, filteredDistricts.length]);

  const handleJoinDistrict = async (districtName) => {
    try {
      const response = await fetch('http://localhost:8000/api/volunteer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: "Guest User",
          email: "user@example.com",
          phone: "0000000000",
          district: districtName,
          message: "I want to join this district and volunteer."
        })
      });
      const data = await response.json();
      alert(data.message);
    } catch (err) {
      alert(`Join Request for ${districtName} received! Our secretary will contact you.`);
    }
  };

  return (
    <div className="district-page pb-5">
      <div className="page-header text-center py-5" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.6)), url(/images/district_bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container">
          <h1 className="tamil-text pt-4 text-white">மாவட்ட வாரியங்கள்</h1>
          <h2 className="mb-2 text-white">District Committees</h2>
          <div className="divider mt-3 mx-auto" style={{ backgroundColor: 'white' }}></div>
        </div>
      </div>

      <div className="container" style={{ marginTop: '-40px' }}>
        <div className="glass-panel p-5 search-container text-center">
          <div className="search-header-content mb-5">
            <h2 className="mb-3">Find Your Community</h2>
            <p className="text-gray mb-4 mx-auto" style={{ maxWidth: '600px' }}>
              Connect with our 38 district leaders across Tamil Nadu and lead the change.
            </p>
            <div className="search-bar mx-auto" style={{ maxWidth: '500px' }}>
              <input
                type="text"
                className="district-search-input"
                placeholder="Search by District or Leader name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {suggestion && (
                <div className="mt-2 text-red" style={{ fontSize: '0.9rem' }}>
                  Did you mean: <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold' }} onClick={() => setSearchTerm(suggestion)}>{suggestion}</span>?
                </div>
              )}
            </div>
          </div>

          <div className="map-section">
            <div className="map-card centered-map">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                src={`https://maps.google.com/maps?q=${encodeURIComponent((activeDistrict || 'Tamil Nadu') + ', India')}&t=&z=${activeDistrict ? 10 : 7}&ie=UTF8&iwloc=&output=embed`}
                allowFullScreen>
              </iframe>
            </div>
          </div>
        </div>

        <div className="district-grid mt-5">
          {filteredDistricts.length > 0 ? filteredDistricts.map((d, i) => (
            <div className="district-card" key={i}>
              <div className="d-flex justify-content-between align-items-start">
                <h3 className="text-red">{d.name}</h3>
                <FaBuilding className="text-light-gray" style={{ fontSize: '1.5rem' }} />
              </div>
              
              <div className="district-info-item">
                <FaUserTie />
                <span><strong>Leader:</strong> {d.leader}</span>
              </div>
              <div className="district-info-item">
                <FaPhoneAlt />
                <span><strong>Contact:</strong> +91 {d.contact}</span>
              </div>
              <div className="district-info-item">
                <FaEnvelope />
                <span><strong>Email:</strong> {d.email}</span>
              </div>

              <div className="district-card-actions">
                <button className="btn btn-outline btn-sm" onClick={() => setActiveDistrict(d.name)}>
                  <FaMapMarkerAlt /> Locate
                </button>
                <button className="btn btn-primary btn-sm" onClick={() => handleJoinDistrict(d.name)}>Join Now</button>
              </div>
            </div>
          )) : (
            <div className="col-12 text-center py-5">
              <p className="text-gray">No districts found matching your keywords.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default District;
