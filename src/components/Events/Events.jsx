import React from 'react';
import Event from './Event/Event';
import './scss/Events.css';
import { bonjovi, imaginedragons, ironmaiden, judaspriest, ozzyosbourne, tameimpala } from '../../assets';

const Events = () => {
  return (
    <div className='events-container'>
      <h1>Events</h1>
      <div className="events-text-card-container">
        <div className="events-text-card">
          <p>Lorem ipsum dolor sit amet consectetur <br />
          adipisicing elit. Minima libero expedita <br />
          sint quod voluptatem temporibus saepe dolor <br />
          quo alias commodi!</p>
        </div>
      </div>
      <div className="event-cards-container">
        <Event artistName="Bon Jovi" importedImage={bonjovi}/>
        <Event artistName="Imagine Dragons" importedImage={imaginedragons}/>
        <Event artistName="Iron Maiden" importedImage={ironmaiden}/>
        <Event artistName="Judas Priest" importedImage={judaspriest}/>
        <Event artistName="Ozzy Osbourne" importedImage={ozzyosbourne}/>
        <Event artistName="Tame Impala" importedImage={tameimpala}/>
      </div>
      <button className="event-load-more-button">Load More...</button>
    </div>
  )
}

export default Events