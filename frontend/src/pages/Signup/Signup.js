import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5001/api/auth/signup", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (err) {
      setError("Error creating account");
    }
  };

  return (
    <div className="signup-container">
      {/* Video Background */}
      <video className="video-background" autoPlay loop muted>
        <source src="/images/other-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Signup Content */}
      <div className="signup-content">
        <h2>Pixelate Signup</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
