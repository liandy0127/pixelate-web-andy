import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Edward Liu",
      bio: "John has extensive experience in AI and machine learning, with a background in computer vision from Cornell University.",
      image: "/images/team/john-doe.jpg",
      linkedin: "https://linkedin.com/in/johndoe"
    },
    {
      id: 2,
      name: "Bohan Yang",
      bio: "Bohan has extensive experience in AI and machine learning, with a background in computer science from Cornell University.",
      image: "/images/team/jane-smith.jpg",
      linkedin: "https://linkedin.com/in/janesmith"
    },
    {
      id: 3,
      name: "Andy Li",
      bio: "Alex specializes in computer vision and deep learning, bringing expertise from his research at UC San Diego.",
      image: "/images/team/alex-johnson.jpg",
      linkedin: "https://linkedin.com/in/alexjohnson"
    },
    {
      id: 4,
      name: "Tony Wang",
      bio: "Sarah oversees product development with her background in UX design and project management from UC Santa Barbara.",
      image: "/images/team/sarah-williams.jpg",
      linkedin: "https://linkedin.com/in/sarahwilliams"
    },

    {
      id: 5,
      name: "Harrison Huang",
      bio: "Sarah oversees product development with her background in UX design and project management from UC Santa Barbara.",
      image: "/images/team/sarah-williams.jpg",
      linkedin: "https://linkedin.com/in/sarahwilliams"
    },

    {
      id: 6,
      name: "Christina Zhang",
      bio: "Sarah oversees product development with her background in UX design and project management from UC Santa Barbara.",
      image: "/images/team/sarah-williams.jpg",
      linkedin: "https://linkedin.com/in/sarahwilliams"
    }
  ];

  return (
    <div className="team-container">
      <div className="team-header">
        <h1>Our Team</h1>
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
              <div className="member-social">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="member-info">
              <h3 className="member-name">{member.name}</h3>
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