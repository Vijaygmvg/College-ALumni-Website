import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="footer-logo">UBDTCE Davanagere</h1>
          <p>
            UBDTCE Davanagere, established in 1951, is one of the premier engineering colleges in Karnataka, India.
          </p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#support">Support</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <ul>
            <li><i className="fas fa-map-marker-alt"></i> Davanagere, Karnataka, India</li>
            <li><i className="fas fa-phone-alt"></i> +91 12345 67890</li>
            <li><i className="fas fa-envelope"></i> info@ubdtcedavanagere.edu</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} UBDTCE Davanagere | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
