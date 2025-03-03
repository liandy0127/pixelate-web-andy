import React, { useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {

  // currently email is captures in the React state variable email 
  // should save this to API and then to some database
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(""); // Clear error when user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear previous error
    setError("");

    // Check if email is empty
    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Here you would typically send the email to your backend
    console.log("Email submitted:", email);

    // Show success message
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div className="dashboard-container">
      <video className="video-background" autoPlay loop muted>
        <source src="/images/other-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="dashboard-content">
        <h2>Welcome to your Dashboard!</h2>
        <p>Our products will be coming soon!</p>

        <div className="waiting-list-container">
          <h3>Join Our Waiting List</h3>
          <p>Be the first to test our beta version when it's released.</p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="waiting-list-form">
              <div className="form-group">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email address"
                  className={error ? "email-input error" : "email-input"}
                  required
                />
                {error && (
                  <p className="error-message">
                    <i className="fas fa-exclamation-circle"></i> {error}
                  </p>
                )}
              </div>
              <button type="submit" className="submit-button">Join Waiting List</button>
            </form>
          ) : (
            <div className="success-message">
              <p>Thank you for joining our waiting list! We'll notify you when our beta version is ready.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
