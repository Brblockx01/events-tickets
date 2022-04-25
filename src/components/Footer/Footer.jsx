import React from 'react';
import './scss/Footer.css';
import { AiFillInstagram, AiFillTwitterCircle, AiFillFacebook, AiFillYoutube } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <AiFillInstagram className='footer-icon'/>
      <AiFillTwitterCircle className='footer-icon'/>
      <AiFillFacebook className='footer-icon'/>
      <AiFillYoutube className='footer-icon'/>
    </div>
  )
}

export default Footer