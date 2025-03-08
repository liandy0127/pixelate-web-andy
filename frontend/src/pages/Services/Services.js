import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-container">
      {/* Video Background */}
      <video className="video-background" autoPlay loop muted>
        <source src="/images/other-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Services Content */}
      <div className="services-content">
        <div className="container">
          <h2>Pixelate Manufacturing Solutions</h2>
          <div className="service-grid">
            <div className="service-card pixelate-card">
              <h3>Core Conversion</h3>
              <ul className="pixelate-list">
                <li>2D DWG → 3D STEP/IGES</li>
                <li>Automated GD&T extraction</li>
                <li>DFM validation suite</li>
              </ul>
            </div>
            <div className="service-card pixelate-card">
              <h3>Enterprise Features</h3>
              <ul className="pixelate-list">
                <li>PLM/ERP integration</li>
                <li>Multi-site workflow management</li>
                <li>QMS compliance reporting</li>
              </ul>
            </div>
            <div className="service-card pixelate-card">
              <h3>Pixelate API</h3>
              <ul className="pixelate-list">
                <li>RESTful endpoints for automation</li>
                <li>Webhooks for real-time updates</li>
                <li>Python/C++ SDKs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
