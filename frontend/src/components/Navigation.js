import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="container">
        <Link to="/" className="logo">Pixelate</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
