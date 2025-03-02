import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthCallback = async () => {
      // Extract the authorization code from the URL
      const urlParams = new URLSearchParams(window.location.search);
      const authCode = urlParams.get("code");

      if (authCode) {
        try {
          // Exchange the authorization code for tokens via your backend
          const response = await axios.post(
            "https://your-api-gateway-url/token", // Replace with your actual backend endpoint
            { code: authCode },
            { headers: { "Content-Type": "application/json" } }
          );

          // Store the tokens in localStorage
          localStorage.setItem("access_token", response.data.access_token);
          localStorage.setItem("id_token", response.data.id_token);

          // Clean up the URL by removing the code parameter
          window.history.replaceState({}, document.title, "/dashboard");
        } catch (error) {
          console.error("Failed to exchange authorization code for tokens:", error);
          // Redirect to login if the token exchange fails
          navigate("/login");
        }
      } else {
        // If no code is present, check if the user is already authenticated
        const accessToken = localStorage.getItem("access_token");
        if (!accessToken) {
          // Redirect to login if no token exists
          navigate("/login");
        }
      }
    };

    // Run the authentication handler
    handleAuthCallback();
  }, [navigate]);

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <p>This is your dashboard content.</p>
      {/* Add additional dashboard content here */}
    </div>
  );
};

export default Dashboard;