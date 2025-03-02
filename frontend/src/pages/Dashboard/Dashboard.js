import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthCallback = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const authCode = urlParams.get('code');

      if (authCode) {
        try {
          const response = await axios.post(
            `${process.env.REACT_APP_API_ENDPOINT}/token`,
            { code: authCode }
          );

          localStorage.setItem('access_token', response.data.access_token);
          localStorage.setItem('id_token', response.data.id_token);
          window.history.replaceState({}, document.title, "/dashboard");
        } catch (error) {
          console.error('Token exchange failed:', error);
          navigate('/login');
        }
      }
    };

    handleAuthCallback();
  }, [navigate]);

  return (
    <div>
      <h1>Welcome to Pixelate Dashboard</h1>
      {/* Add your dashboard content here */}
    </div>
  );
};

export default Dashboard;