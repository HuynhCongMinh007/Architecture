// src/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header>
     <Link to='/' className='text-decoration-none text-center original text-dark'>ORIGINAL</Link>
    </header>
  );
}

export default Header;
