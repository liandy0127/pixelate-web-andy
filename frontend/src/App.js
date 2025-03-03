import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard'; // Import Dashboard page
import Team from './pages/Team/Team'; // Import the Team component
import Footer from './components/Footer';
import './App.css';

function App() {
  const isLoggedIn = localStorage.getItem('token'); // Check if logged in

  return (
    <Router>
      {/* Render Navigation only for non-dashboard pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />  {/* Dashboard route */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/services" element={<Services />} /> */}
        <Route path="/team" element={<Team />} /> {/* Add Team route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
