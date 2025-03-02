import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const COGNITO_DOMAIN = process.env.REACT_APP_COGNITO_DOMAIN;
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const REDIRECT_URI = encodeURIComponent('https://pixelateinc.com/dashboard');

  const loginUrl = `https://${COGNITO_DOMAIN}/login/continue?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}response_type=code&scope=email+openid+profile`;

  return (
    <div className="login-container">
      <video className="video-background" autoPlay loop muted>
        <source src="/images/other-background.mp4" type="video/mp4" />
      </video>

      <div className="login-content">
        <h2>Pixelate Login</h2>
        <a href={loginUrl} className="cognito-login-button">
          Login with AWS Cognito
        </a>
      </div>
    </div>
  );
};

export default Login;