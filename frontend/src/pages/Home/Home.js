import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Video Background */}
      <video className="video-background" autoPlay loop muted>
        <source src="/images/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Pixelate Precision Manufacturing</h1>
          <p>Convert 2D blueprints to optimized 3D models with AI-driven accuracy</p>
          <button className="cta-button">Launch Pixelate Studio</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="feature-card">
            <h3>Smart Blueprint Conversion</h3>
            <p>Our proprietary PXL-Engine™ processes drawings with 99.98% dimensional accuracy</p>
          </div>
          <div className="feature-card">
            <h3>Collaborative Workspace</h3>
            <p>Real-time team editing with version control and annotation tools</p>
          </div>
          <div className="feature-card">
            <h3>Industry Compliance</h3>
            <p>Automated ASME Y14.5 and ISO 2768 standard enforcement</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
