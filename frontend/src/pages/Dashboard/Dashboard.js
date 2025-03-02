import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <video className="video-background" autoPlay loop muted>
        <source src="/images/other-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="dashboard-content">
        <h2>Welcome to your Dashboard!</h2>
        <p>Dashboard details here...</p>
      </div>
    </div>
  );
};

export default Dashboard;