import React from 'react';
import './scss/Extra.css';

const Extra = () => {
  return (
    <div className='extra-container'>
      <div className="extra-boxes-container">
        <div className="extra-box">
          <p>Drinks and beverages brought from outside the event are not allowed unless it's water.</p>
        </div>
        <div className="extra-box">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate amet <br /> 
          minima nostrum pariatur! Rerum, sapiente!</p>
        </div>
        <div className="extra-box">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quaerat <br />
          nisi facilis, accusantium ab animi necessitatibus, odio nesciunt ipsum dignissimos <br />
          doloremque quis hic officiis consequuntur.</p>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  )
}

export default Extra