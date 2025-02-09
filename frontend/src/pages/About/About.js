import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Video Background */}
      <video className="video-background" autoPlay loop muted>
        <source src="/images/other-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* About Page Content */}
      <div className="about-content">
        <h2>The Pixelate Difference</h2>
        <p>
          Founded in 2024 at Cornell's Manufacturing Research Center,
          Pixelate combines cutting-edge AI, data analysis, and secure
          revision tracking to revolutionize 2D-to-3D conversions.
        </p>

        <ul className="pixelate-list">
          <li>Generative Adversarial Networks (GANs) for design optimization</li>
          <li>Topological data analysis for material efficiency</li>
          <li>Blockchain-based revision tracking</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
