import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    const handleAuthCallback = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const authCode = urlParams.get("code");

      if (authCode) {
        try {
          // Step 1: Exchange code for tokens
          const response = await axios.post(
            "https://your-backend-api.com/exchange-code", // Replace with your backend endpoint
            { code: authCode },
            { headers: { "Content-Type": "application/json" } }
          );

          // Store tokens
          localStorage.setItem("access_token", response.data.access_token);
          localStorage.setItem("id_token", response.data.id_token);

          // Clean URL AFTER storing tokens
          window.history.replaceState({}, document.title, "/dashboard");
          setIsLoading(false); // Disable loading

        } catch (error) {
          console.error("Token exchange failed:", error);
          localStorage.clear(); // Clear invalid tokens
          navigate("/login");
        }
      } else {
        // If no code, check for existing token
        const accessToken = localStorage.getItem("access_token");
        if (!accessToken) {
          navigate("/login");
        } else {
          setIsLoading(false); // User is authenticated
        }
      }
    };

    handleAuthCallback();
  }, [navigate]);

  // Show loading state while processing
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Only show dashboard when authenticated
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <p>Hello, user! You're authenticated!</p>
    </div>
  );
};

export default Dashboard;