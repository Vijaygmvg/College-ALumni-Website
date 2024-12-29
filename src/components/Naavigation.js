import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Naavigation.css'
import logo from '../vijay.png'; 

const Naavigation = () => {
  const [showNav, setShowNav] = useState(false);
  const [showHomeDropdown, setShowHomeDropdown] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);

  const toggleNav = () => setShowNav(!showNav);
  const toggleHomeDropdown = () => setShowHomeDropdown(!showHomeDropdown);
  const toggleAboutDropdown = () => setShowAboutDropdown(!showAboutDropdown);
  const toggleLoginDropdown = () => setShowLoginDropdown(!showLoginDropdown);

  return (
    <div className="App">
      <input
        type="checkbox"
        id="nav-toggle"
        className="nav-toggle"
        checked={showNav}
        onChange={toggleNav}
      />
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <ul className={`nav-links ${showNav ? 'show' : ''}`}>
          <li className="dropdown">
            <span onClick={toggleHomeDropdown}>Home ▼</span>
            {showHomeDropdown && (
              <ul className="dropdown-content">
                <li><Link to="/">Main </Link></li>
              </ul>
            )}
          </li>
          <li className="dropdown">
            <span onClick={toggleAboutDropdown}>About▼</span>
            {showAboutDropdown && (
              <ul className="dropdown-content">
                <li><a href="/about">About College</a></li>
                <li><a href="/association">About Alumni Website</a></li>
                <li><a href="https://en.wikipedia.org/wiki/University_B.D.T._College_of_Engineering">About History</a></li>
              </ul>
            )}
          </li>
          <li><Link to="/news">news</Link></li>
          <li><Link to="/register">Registration</Link></li>
          <li className="dropdown">
            <span onClick={toggleLoginDropdown}>Login▼</span>
            {showLoginDropdown && (
              <ul className="dropdown-content">
                <li><Link to="/loginAdmin">Login as Admin</Link></li>
                <li><Link to="/loginAlumni">Login as Alumni</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/searchalumni">search🔎</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Naavigation;
