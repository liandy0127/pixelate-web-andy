// export default Home;
import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';


const Home = () => {
  const COGNITO_DOMAIN = process.env.REACT_APP_COGNITO_DOMAIN;
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const REDIRECT_URI = encodeURIComponent('https://www.pixelateinc.com/dashboard');
  const loginUrl = `https://${COGNITO_DOMAIN}/login/continue?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=email+openid+profile`;

  return (
    <div className="home-container">
      {/* HEAD (note: in a typical React app, you'd handle <title> and <link> 
          in public/index.html or using react-helmet, but here's inline for clarity) */}
      <head>
        <link rel="icon" href="/images/Logo 1.png" />
        <title>Pixelate</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </head>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="nav-left">
            <img
              src="/images/Logo 1.png"
              alt="Pixelate Logo"
              className="nav-logo"
            />
            {/* <span className="nav-brand">PIXELATE</span> */}
          </div>
          <div className="nav-right">
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href={loginUrl}>Login</a></li>
              <li><a href="/team">Team</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>


      {/* HERO / TOP SECTION */}
      <section className="hero-section" id="home">
        <div className="hero-content">
          <h1 className="hero-title">From Concept to CAD </h1>
          <p className="hero-subtext">
            Manual 2D-to-3D conversion is slow and tedious, whether you're working with
            technical prints or creative sketches. Pixelate automates this process,
            using AI to transform hand-drawn ideas and precise engineering drawings into
            intelligent 3D models. Unlock new possibilities in design, manufacturing,
            and prototyping with effortless AI-powered workflows.
          </p>

          <Link to="/dashboard">
            <button className="hero-button">Try our beta</button>
          </Link>

          {/* Optional hero image below the button */}
          <div className="hero-image-container">
            {/* <img
        src="/images/placeholder-hero.png"
        alt="Hero Visual"
        className="hero-image"
      /> */}
          </div>
        </div>
      </section>


      {/* ABOUT SECTION */}
      <section className="about-section" id="about">
        <h2>About Pixelate</h2>
        <p className="about-text">
          Pixelate is a cutting-edge startup founded by a group of college students, driven by a passion for technological innovation and excellence. Our goal is
          to revolutionize the manufacturing industry by developing and deploying state-of-the-art AI software and services.
        </p>

        {/* Text above university logos */}
        <p className="founding-members-text">Our founding members are coming from:</p>

        {/* University logos instead of stats */}
        <div className="university-logos">
          <div className="logo-item">
            <img src="/images/cornell-logo.png" alt="Cornell University" className="university-logo" />
          </div>
          <div className="logo-item">
            <img src="/images/berkeley-logo.png" alt="UC Berkeley" className="university-logo" />
          </div>
          <div className="logo-item">
            <img src="/images/ucsd-logo.png" alt="UC San Diego" className="university-logo" />
          </div>
          <div className="logo-item">
            <img src="/images/ucsb-logo.png" alt="UC Santa Barbara" className="university-logo" />
          </div>
        </div>

        {/* Optional image underneath the logos */}
        <div className="about-image-container">
          {/* <img
            // src="/images/Group 1.png"
            alt="About Illustration"
            className="about-image"
          /> */}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section" id="contact">
        <h2>Contact Us</h2>
        <p className="contact-text">
          We are always open to discuss new value-adding partnerships. Do reach out if you are an exchange or a project looking for liquidity; an algorithmic trader
          or a software developer looking to improve the markets with us or just have a great idea you can't wait to share with us!
        </p>

        {/* New contact cards implementation */}
        <div className="contact-cards">
          <a href="mailto:pixelate688@gmail.com" className="contact-card">
            <div className="contact-card-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <p className="contact-card-text">pixelate688@gmail.com</p>
          </a>

          <a href="https://www.instagram.com/pixelate.inc.ai" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-card-icon">
              <i className="fab fa-instagram"></i>
            </div>
            <p className="contact-card-text">@pixelate.inc.ai</p>
          </a>

          <a href="https://www.linkedin.com/company/pixelate-ai/" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-card-icon">
              <i className="fab fa-linkedin-in"></i>
            </div>
            <p className="contact-card-text">@pixelate-ai</p>
          </a>
        </div>

        {/* Old contact methods implementation - commented out
        <div className="contact-methods">
          <a href="mailto:pixelate688@gmail.com" className="contact-method">
            <div className="contact-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="contact-info">
              <h3>Email</h3>
              <p>pixelate688@gmail.com</p>
            </div>
          </a>
          
          <a href="https://www.instagram.com/pixelate.inc.ai" target="_blank" rel="noopener noreferrer" className="contact-method">
            <div className="contact-icon">
              <i className="fab fa-instagram"></i>
            </div>
            <div className="contact-info">
              <h3>Instagram</h3>
              <p>@pixelate.inc.ai</p>
            </div>
          </a>
          
          <a href="https://www.linkedin.com/company/pixelate-ai/" target="_blank" rel="noopener noreferrer" className="contact-method">
            <div className="contact-icon">
              <i className="fab fa-linkedin-in"></i>
            </div>
            <div className="contact-info">
              <h3>LinkedIn</h3>
              <p>@pixelate-ai</p>
            </div>
          </a>
        </div>
        */}
      </section>

      {/* EXTRA IMAGE SECTION (underneath everything else) */}
      <section className="extra-image-section">
        <div className="extra-image-container">
          <img
            src="/images/Logo 1.png"
            alt="Extra Visual"
            className="extra-image"
          />
        </div>
      </section>

      {/* FOOTER */}
      {/* <footer className="footer-section">
        <p>© 2023 Pixelate. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default Home;
