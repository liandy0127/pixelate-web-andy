import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Background Video */}
      <video className="video-background" autoPlay loop muted>
        <source src="/images/other-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main Contact Content */}
      <div className="contact-content">
        <div className="container">
          <div className="contact-grid">

            {/* Left Side Contact Info */}
            <div className="contact-info">
              <h2>Pixelate Manufacturing Network</h2>

              <div className="info-item pixelate-card">
                <h4>Global HQ</h4>
                <p>
                  Pixelate Technologies<br />
                  Cornell Tech Campus<br />
                  2 West Loop Road, New York
                </p>
              </div>

              <div className="info-item pixelate-card">
                <h4>Connect</h4>
                <p>
                  Enterprise Sales: +1 (646) 972-PXL8 (7958)<br />
                  Technical Support: help@pixelate.tech<br />
                  Partnerships: alliances@pixelate.tech
                </p>
              </div>
            </div>

            {/* Right Side Contact Form */}
            <form className="contact-form pixelate-card">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Company Email" required />
              <select required>
                <option value="">Industry Sector</option>
                <option>Aerospace & Defense</option>
                <option>Automotive Manufacturing</option>
                <option>Industrial Equipment</option>
                <option>Medical Devices</option>
              </select>
              <textarea
                placeholder="Technical Requirements (Specify CAD/PLM systems)"
                required
              ></textarea>
              <button type="submit">Request Platform Demo</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
