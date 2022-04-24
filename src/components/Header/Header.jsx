import React from 'react';
import './scss/Header.css';

const Header = () => {
  return (
    <div className='header-container'>
      <div className="logo-container">
        <h1>CITY STADIUM</h1>
      </div>
      <div className="header-links">
        <li className="link">
          <a href="#">TICKET</a>
        </li>
        <li className="link">
          <a href="#">TICKET</a>
        </li>
        <li className="link">
          <a href="#">TICKET</a>
        </li>
        <li className="link">
          <a href="#">TICKET</a>
        </li>
      </div>
    </div>
  )
}

export default Header