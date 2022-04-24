import React from 'react'

const Event = ({ artistName, importedImage }) => {
  return (
    <div className='event-container'>
        <img src={importedImage} alt="" />
        <h2 className='artist-name'>{artistName}</h2>
        <a href="" className='buy-ticket-link'>Buy Ticket</a>
    </div>
  )
}

export default Event