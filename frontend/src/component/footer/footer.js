// src/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <p>&copy; 2025 My Simple React App. All rights reserved.</p>
      <div>
        <a href="#privacy" className="text-white mx-2">Privacy Policy</a>
        <a href="#terms" className="text-white mx-2">Terms of Service</a>
      </div>
    </footer>
  );
}

export default Footer;
