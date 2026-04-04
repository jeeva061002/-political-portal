import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaUserTie } from 'react-icons/fa';
import Card from '../components/Card';

const District = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeDistrict, setActiveDistrict] = useState('');

  const districtData = [
    { name: "Ariyalur", leader: "Arun Kumar", contact: "9876500001", email: "ariyalur@makkalkatchi.org", activities: 4 },
    { name: "Chengalpattu", leader: "Balaji", contact: "9876500002", email: "chengalpattu@makkalkatchi.org", activities: 8 },
    { name: "Chennai", leader: "Anbu Selvan", contact: "9876543210", email: "chennai@makkalkatchi.org", activities: 12 },
    { name: "Coimbatore", leader: "Vigneshwaran", contact: "9876543212", email: "covai@makkalkatchi.org", activities: 15 },
    { name: "Cuddalore", leader: "Dinesh", contact: "9876500005", email: "cuddalore@makkalkatchi.org", activities: 6 },
    { name: "Dharmapuri", leader: "Elango", contact: "9876500006", email: "dharmapuri@makkalkatchi.org", activities: 7 },
    { name: "Dindigul", leader: "Farooq", contact: "9876500007", email: "dindigul@makkalkatchi.org", activities: 5 },
    { name: "Erode", leader: "Ganesh", contact: "9876500008", email: "erode@makkalkatchi.org", activities: 9 },
    { name: "Kallakurichi", leader: "Hari", contact: "9876500009", email: "kallakurichi@makkalkatchi.org", activities: 4 },
    { name: "Kanchipuram", leader: "Ilangovan", contact: "9876500010", email: "kanchipuram@makkalkatchi.org", activities: 11 },
    { name: "Kanyakumari", leader: "Jeeva", contact: "9876500011", email: "kanyakumari@makkalkatchi.org", activities: 8 },
    { name: "Karur", leader: "Karthik", contact: "9876500012", email: "karur@makkalkatchi.org", activities: 7 },
    { name: "Krishnagiri", leader: "Lakshmanan", contact: "9876500013", email: "krishnagiri@makkalkatchi.org", activities: 5 },
    { name: "Madurai", leader: "Muthu Pandi", contact: "9876543211", email: "madurai@makkalkatchi.org", activities: 8 },
    { name: "Mayiladuthurai", leader: "Naveen", contact: "9876500015", email: "mayiladuthurai@makkalkatchi.org", activities: 3 },
    { name: "Nagapattinam", leader: "Om Prakash", contact: "9876500016", email: "nagapattinam@makkalkatchi.org", activities: 6 },
    { name: "Namakkal", leader: "Prabhu", contact: "9876500017", email: "namakkal@makkalkatchi.org", activities: 5 },
    { name: "Nilgiris", leader: "Quadir", contact: "9876500018", email: "nilgiris@makkalkatchi.org", activities: 4 },
    { name: "Perambalur", leader: "Ramesh", contact: "9876500019", email: "perambalur@makkalkatchi.org", activities: 2 },
    { name: "Pudukkottai", leader: "Sathish", contact: "9876500020", email: "pudukkottai@makkalkatchi.org", activities: 7 },
    { name: "Ramanathapuram", leader: "Thiruvalavan", contact: "9876500021", email: "ramanathapuram@makkalkatchi.org", activities: 5 },
    { name: "Ranipet", leader: "Udhaya", contact: "9876500022", email: "ranipet@makkalkatchi.org", activities: 3 },
    { name: "Salem", leader: "Senthil Kumar", contact: "9876543214", email: "salem@makkalkatchi.org", activities: 9 },
    { name: "Sivaganga", leader: "Velmurugan", contact: "9876500024", email: "sivaganga@makkalkatchi.org", activities: 6 },
    { name: "Tenkasi", leader: "Wellingdon", contact: "9876500025", email: "tenkasi@makkalkatchi.org", activities: 4 },
    { name: "Thanjavur", leader: "Xavier", contact: "9876500026", email: "thanjavur@makkalkatchi.org", activities: 8 },
    { name: "Theni", leader: "Yuvan", contact: "9876500027", email: "theni@makkalkatchi.org", activities: 5 },
    { name: "Thoothukudi", leader: "Zakir", contact: "9876500028", email: "thoothukudi@makkalkatchi.org", activities: 7 },
    { name: "Tiruchirappalli", leader: "Karthik Raj", contact: "9876543213", email: "trichy@makkalkatchi.org", activities: 10 },
    { name: "Tirunelveli", leader: "Murugan", contact: "9876543215", email: "nellai@makkalkatchi.org", activities: 5 },
    { name: "Tirupathur", leader: "Ashok", contact: "9876500031", email: "tirupathur@makkalkatchi.org", activities: 4 },
    { name: "Tiruppur", leader: "Bharath", contact: "9876500032", email: "tiruppur@makkalkatchi.org", activities: 11 },
    { name: "Tiruvallur", leader: "Chandran", contact: "9876500033", email: "tiruvallur@makkalkatchi.org", activities: 9 },
    { name: "Tiruvannamalai", leader: "Devaraj", contact: "9876500034", email: "tiruvannamalai@makkalkatchi.org", activities: 7 },
    { name: "Tiruvarur", leader: "Elangovan", contact: "9876500035", email: "tiruvarur@makkalkatchi.org", activities: 4 },
    { name: "Vellore", leader: "Faizal", contact: "9876500036", email: "vellore@makkalkatchi.org", activities: 8 },
    { name: "Viluppuram", leader: "Gokul", contact: "9876500037", email: "viluppuram@makkalkatchi.org", activities: 6 },
    { name: "Virudhunagar", leader: "Hariharan", contact: "9876500038", email: "virudhunagar@makkalkatchi.org", activities: 7 }
  ];

  const [suggestion, setSuggestion] = useState('');

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

  return (
    <div className="district-page pb-5">
      <div className="page-header text-white text-center py-5" style={{ backgroundImage: 'linear-gradient(rgba(19, 17, 17, 0.56), rgba(0,0,0,0.7)), url(/images/district_bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h1 className="tamil-text pt-4">மாவட்ட வாரியங்கள்</h1>
        <h2 className="mb-2 text-white">District Committees</h2>
        <div className="divider mt-3 mx-auto" style={{ backgroundColor: 'white' }}></div>
      </div>

      <div className="container mt-5">
        <div className="row mb-5 align-items-center">
          <div className="col">
            <h2>Find Your District Leader</h2>
            <p className="text-gray mb-4">Connect with our district leaders and participate in local party activities.</p>
            <div className="search-bar" style={{ maxWidth: '400px' }}>
              <input
                type="text"
                placeholder="Search district or leader name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: '100%', padding: '12px 15px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {suggestion && (
                <div className="mt-2 text-danger" style={{ fontSize: '0.95rem' }}>
                  Did you mean: <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold' }} onClick={() => setSearchTerm(suggestion)}>{suggestion}</span>?
                </div>
              )}
            </div>
          </div>
          <div className="col text-center d-none d-md-block">
            <div className="glass-panel p-2" style={{ height: '350px', background: 'var(--off-white)', borderRadius: '8px' }}>
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '4px' }}
                src={`https://maps.google.com/maps?q=${encodeURIComponent((activeDistrict || 'Tamil Nadu') + ', India')}&t=&z=${activeDistrict ? 10 : 6}&ie=UTF8&iwloc=&output=embed`}
                allowFullScreen>
              </iframe>
            </div>
          </div>
        </div>

        <div className="district-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {filteredDistricts.length > 0 ? filteredDistricts.map((d, i) => (
            <div className="glass-panel p-4" key={i} style={{ borderRadius: '8px', transition: 'transform 0.3s' }}>
              <h3 className="text-red mb-3 border-bottom pb-2" style={{ borderBottom: '1px solid #eee' }}>{d.name}</h3>
              <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                <FaUserTie className="text-gray me-2" style={{ marginRight: '10px' }} />
                <strong>Leader:</strong> <span style={{ marginLeft: '5px' }}>{d.leader}</span>
              </div>
              <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                <FaPhoneAlt className="text-gray me-2" style={{ marginRight: '10px' }} />
                <strong>Contact:</strong> <span style={{ marginLeft: '5px' }}>+91 {d.contact}</span>
              </div>
              <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                <FaEnvelope className="text-gray me-2" style={{ marginRight: '10px' }} />
                <strong>Email:</strong> <span style={{ marginLeft: '5px' }}>{d.email}</span>
              </div>
              <div className="mt-4 pt-3" style={{ borderTop: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button className="btn btn-outline" style={{ padding: '6px 12px', fontSize: '0.85rem' }} onClick={() => setActiveDistrict(d.name)}>
                  <FaMapMarkerAlt style={{ marginRight: '5px' }} /> Locate
                </button>
                <button className="btn btn-primary" style={{ padding: '6px 12px', fontSize: '0.85rem', color: 'white' }}>Join District</button>
              </div>
            </div>
          )) : (
            <div className="col-12 text-center py-5">
              <p>No districts found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default District;
