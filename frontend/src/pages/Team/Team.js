import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Edward Liu",
      role: "Founder & CEO",
      bio: "Edward is a junior studying Economics & Information Science with expertise in business development.",
      image: "/images/Edward_profile.png",
      linkedin: "https://www.linkedin.com/in/edward-liu-289538257/"
    },
    {
      id: 2,
      name: "Bohan Yang",
      role: "Founder & CTO",
      bio: "Bohan has extensive experience in AI and machine learning, with a background in computer science from Cornell University.",
      image: "/images/Frank_profile.png",
      linkedin: "https://www.linkedin.com/in/bohan-yang-b42959220/"
    },
    {
      id: 3,
      name: "Andy Li",
      role: "Software Engineer",
      bio: "Andy studies Computer Science at Cornell and has industry experience in Software and Data Engineering.",
      image: "/images/Andy_profile.png",
      linkedin: "https://www.linkedin.com/in/andyshijiali/"
    },
    {
      id: 4,
      name: "Tony Wang",
      role: "Product Design Engineer",
      bio: "Tony studies Mechanical Engineering at USC. He's passionate about 3D design and AutoCAD software.",
      image: "/images/Tony_profile2.png",
      linkedin: "https://linkedin.com/"
    },
    {
      id: 5,
      name: "Harrison Huang",
      role: "Software Engineer",
      bio: "Hello there! I'm Harrison, and I double major in Data Science and Art at UC Berkeley. I make a lot of art stuff in between coding :)",
      image: "/images/Harrison_profile2.jpg",
      linkedin: "https://www.linkedin.com/in/harrisonlrhuang/"
    },
    {
      id: 6,
      name: "Christina Zhang",
      role: "Business Development",
      bio: "Christina studies Economics with a background in marketing, UX design, and project management from UC Santa Barbara.",
      image: "/images/Christina_profile.png",
      linkedin: "https://www.linkedin.com/in/christina-zhang-1a991a2a7/"
    }
  ];


  return (
    <div className="team-container">
      <div className="team-header">
        <h1>Our Founding Team</h1>
        <p className="team-intro">
          Meet the talented individuals behind Pixelate. Our diverse team brings together expertise in AI,
          CAD modeling, and software development to create cutting-edge solutions.
        </p>
      </div>

      <div className="team-grid">
        {teamMembers.map(member => (
          <div className="team-member" key={member.id}>
            <div className="member-image-container">
              <img src={member.image} alt={member.name} className="member-image" />
            </div>
            <div className="member-info">
              <div className="member-header">
                <h3 className="member-name">{member.name}</h3>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="member-linkedin">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="22" height="22" fill="currentColor">
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                  </svg>
                </a>
              </div>
              <p className="member-role">{member.role}</p>
              <p className="member-bio">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team; 