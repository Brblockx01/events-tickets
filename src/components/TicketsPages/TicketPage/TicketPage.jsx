import QRCode from 'qrcode';
import { HiLocationMarker } from 'react-icons/hi';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TicketPage = ({ bandName, bandImage }) => {
  // const App = ({ text }) => {
    const [src, setSrc] = useState('');
  
    // const displayQRCode = () => {}
    useEffect(() => {
      QRCode.toDataURL("text-of-of-1923x").then((data) => {
        setSrc(data)
      });
    }, [])

  return (
    <div className='ticket-page-container'>
      <div className="go-back-link-container">
        <Link to="/" className='go-back-link'>Go Back!</Link>
      </div>
      <div className="divider"></div>
      <div className="tikcet-band-image-container">
        <img className='tikcet-band-image' src={bandImage}/>
      </div>
      <h1>{bandName}</h1>
      <h3>XX/XX/XXXX</h3>
      <div className='location-icon-container'>
        <h3>Event Location</h3>
        <HiLocationMarker className='location-icon' />
      </div>
      <div className="divider"></div>
      <div className="buy-tickets-btn-container">
        <button className="buy-tickets-btn">Buy Tickets</button>
      </div>
      <div className="qrcode-container">
        <img src={src} />
      </div>
    </div>
  )
}

export default TicketPage