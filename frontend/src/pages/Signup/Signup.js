import React from "react";
import "./Signup.css";

const Signup = () => {
  const COGNITO_DOMAIN = process.env.REACT_APP_COGNITO_DOMAIN;
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const REDIRECT_URI = encodeURIComponent('https://pixelateinc.com/dashboard');


  const signupUrl = `https://${COGNITO_DOMAIN}/login/continue?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}response_type=code&scope=email+openid+profile`;

  return (
    <div className="signup-container">
      <video className="video-background" autoPlay loop muted>
        <source src="/images/other-background.mp4" type="video/mp4" />
      </video>

      <div className="signup-content">
        <h2>Pixelate Signup</h2>
        <a href={signupUrl} className="cognito-signup-button">
          Create Account with AWS Cognito
        </a>
      </div>
    </div>
  );
};

export default Signup;