import React from 'react';
import { HiLocationMarker } from 'react-icons/hi';

const Event = ({ artistName, importedImage }) => {
  return (
    <div className='event-container'>
        <img src={importedImage} alt="" />
        <h2 className='artist-name'>{artistName}</h2>
        <div className="event-icon-container">
          <HiLocationMarker className='location-icon' />
          <p>Event Location</p>
          <p>XX/XX/XXXX</p>
        </div>
        <a href="" className='buy-ticket-link'>Buy Tickets</a>
    </div>
  )
}

export default Event