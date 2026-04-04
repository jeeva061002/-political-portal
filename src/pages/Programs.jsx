import React from 'react';
import Card from '../components/Card';
import './Programs.css';

const Programs = () => {
  const programsList = [
    {
      id: 1,
      image: "/images/agri1.png",
      title: "Uzhavar Paathukappu (Farmer Protection)",
      description: "A dedicated initiative to safeguard farmers’ rights through fair pricing, organic farming promotion, and protection of agricultural lands.",
      category: "Agricultural"
    },
    {
      id: 2,
      image: "/images/tam.png",
      title: "Tamil Kalvi Iyakkam (Tamil Education Movement)",
      description: "Focused on strengthening Tamil-medium education, improving literacy, and providing free coaching for government school students.",
      category: "Educational"
    },
    {
      id: 3,
      image: "/images/agri.png",
      title: "Magalir Urimai Thittam (Women Rights Program)",
      description: "Empowering women through education, safety awareness, and support for small-scale entrepreneurship and self-employment.",
      category: "Social"
    },
    {
      id: 4,
      image: "/images/envi.png",
      title: "Iyarkai Paathukappu Iyakkam (Environmental Protection Movement)",
      description: "Promoting tree plantation, water conservation, and protection of natural resources for a sustainable Tamil Nadu.",
      category: "Environmental"
    },
    {
      id: 5,
      image: "/images/our_leader.png",
      title: "Ilaignar Padai (Youth Force)",
      description: "Encouraging youth participation in politics, leadership training, and organizing sports and career guidance programs.",
      category: "Youth"
    },
    {
      id: 6,
      image: "/images/hos.png",
      title: "Makkal Nala Maruthuvam (Public Health Initiative)",
      description: "Providing free medical camps, health awareness programs, and support for rural healthcare development.",
      category: "Health"
    }
  ];

  return (
    <div className="programs-page pb-5">
      <div className="page-header text-white text-center py-5" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/images/programs_bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h1 className="tamil-text pt-4">மக்கள் திட்டங்கள்</h1>
        <h2 className="mb-2">Our Programs</h2>
        <div className="divider mt-3 mx-auto" style={{ backgroundColor: 'white' }}></div>
      </div>

      <div className="container mt-5">
        <div className="text-center mb-5 max-w-800 mx-auto">
          <p className="lead text-gray">
            Beyond politics, we believe in constant action. Our volunteer-driven programs have touched millions of lives. Discover our initiatives and see how you can contribute.
          </p>
        </div>

        <div className="programs-grid">
          {programsList.map((program) => (
            <div key={program.id} className="program-card-wrap">
              <Card
                image={program.image}
                title={program.title}
                description={program.description}
                variant="program"
              >
                <div className="program-meta mt-3">
                  <span className="badge program-category">{program.category}</span>
                  <button className="btn btn-outline btn-sm mt-3" style={{ width: '100%' }}>Volunteer for this</button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
