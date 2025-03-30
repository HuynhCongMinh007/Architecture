import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  const [logoUrl, setLogoUrl] = useState(null);

  useEffect(() => {
    // Gọi API để lấy link ảnh
    fetch(`${process.env.REACT_APP_API_URL}/api/logo_app`)
      .then(response => response.json())
      .then(data => {
          setLogoUrl(data);
      })
      .catch(error => console.error('Error fetching logo:', error));
  }, []);

  return (
    <header>
      <Link to='/' className='text-decoration-none text-center original text-dark'>
        {logoUrl ? <img src={logoUrl} alt="Logo" className="logo" /> : <h1>ORIGINAL</h1>}
      </Link>
    </header>
  );
}

export default Header;
