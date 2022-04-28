import React from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import { Link } from "react-router-dom";

const Event = ({ artistName, importedImage, linkTo }) => {
  return (
    <div className='event-container'>
        <img src={importedImage} alt="" />
        <h2 className='artist-name'>{artistName}</h2>
        <div className="event-icon-container">
          <HiLocationMarker className='location-icon' />
          <p>Event Location</p>
          <p>XX/XX/XXXX</p>
        </div>
          {/* <Route path={routePath} element={routeElement}>Buy Tickets</Route> */}
          <Link to={linkTo} className='buy-ticket-link'>Buy Tickets</Link>
    </div>
  )
}

export default Event