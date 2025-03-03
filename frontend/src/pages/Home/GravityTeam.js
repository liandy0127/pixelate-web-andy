import React from 'react';
import './GravityTeam.css';

const Home = () => {
  return (
    <div className="gravity-container">
      {/* Header */}
      <header className="header">
        <div className="logo">GRAVITY TEAM</div>
        <nav>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Work With Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><button className="contact-button">Get in Touch</button></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Balancing <br /> Crypto Markets</h1>
        <p>
          Our fully automated proprietary quantitative trading software provides 24/7
          liquidity to 170+ crypto assets across 25+ centralized spot and derivative crypto exchanges.
        </p>
        <button className="cta-button">Learn More</button>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Gravity Team</h2>
        <p>
          At Gravity Team, we are on a mission to balance the supply and demand across
          crypto markets worldwide. We are a crypto-native market maker founded by traders,
          developers, and innovators who strongly believe in the future of decentralization.
        </p>
        <div className="stats">
          <div>
            <h3>~$100 Billion</h3>
            <p>Cumulative Trading Volume</p>
          </div>
          <div>
            <h3>0.8%</h3>
            <p>Global Spot Market Share</p>
          </div>
          <div>
            <h3>2017</h3>
            <p>Founded</p>
          </div>
          <div>
            <h3>1,200+</h3>
            <p>Crypto-asset Pairs</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Crypto Market Making</h2>
        <div className="service-cards">
          <div className="card">
            <h3>Market Making for Crypto Projects</h3>
            <p>
              Accelerate your token’s journey by boosting its liquidity. We support
              projects with growth strategies and liquidity provision.
            </p>
            <a href="#">Learn More</a>
          </div>
          <div className="card">
            <h3>Market Making for Crypto Exchanges</h3>
            <p>
              Our market-making services help exchanges attract traders and
              gain market-leading positions.
            </p>
            <a href="#">Learn More</a>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners">
        <h2>Our Partners & Friends</h2>
        <div className="logos">
          <img src="/images/bithumb.png" alt="Bithumb" />
          <img src="/images/bitbank.png" alt="Bitbank" />
          <img src="/images/binance.png" alt="Binance" />
          <img src="/images/coinbase.png" alt="Coinbase" />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>We are in a good company</h2>
        <p>
          "Since 2019, Gravity Team has been an astounding market maker for Bitkub. They
          have proven themselves as one of the most reliable and consistent partners."
        </p>
        <h4>Atthakrit Chimplapibul, CEO of Bitkub</h4>
      </section>

      {/* Join Us Section */}
      <section className="join">
        <h2>Join Gravity Team</h2>
        <p>
          We are a team of bright, talented people solving exciting cryptocurrency
          market challenges. Join us and help shape the future of digital assets.
        </p>
        <a href="#">Learn More</a>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact Us</h2>
        <p>
          We are always open to discussing new partnerships. If you're an exchange,
          a project, or an algorithmic trader looking for collaboration, let's talk!
        </p>
        <button className="contact-button">Get in Touch</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Gravity Team. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
