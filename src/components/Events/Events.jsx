import React from 'react';
import Event from './Event/Event';
import './scss/Events.css';
import { bonjovi, imaginedragons, ironmaiden, judaspriest, ozzyosbourne, tameimpala } from '../../assets';
// import { Routes, Route } from "react-router-dom";
import IronMaiden from '../TicketsPages/IronMaiden';

const Events = () => {
  return (
    <div className='events-container'>
      {/* <Routes>
        <Route path="IronMaiden" element={<IronMaiden />} />
      </Routes> */}
      <div className='header-container'>
      <div className="logo-container">
        <h1>ROCK FESTIVAL</h1>
      </div>
      <div className="divider"></div>
      <div className="header-links">
        <li className="link">
          <a href="#">Open Air Area</a>
        </li>
        <li className="link">
          <a href="#">Events</a>
        </li>
        <li className="link">
          <a href="#">About</a>
        </li>
        <li className="link">
          <a href="#">Contact</a>
        </li>
      </div>
      <div className="divider"></div>
    </div>
      <h1 className='events-title'>Events</h1>
      <div className="events-text-card-container">
        <div className="events-text-card">
          <p>Lorem ipsum dolor sit amet consectetur <br />
          adipisicing elit. Minima libero expedita <br />
          sint quod voluptatem temporibus saepe dolor <br />
          quo alias commodi!</p>
        </div>
      </div>
      <div className="event-cards-container">
        <Event artistName="Bon Jovi" importedImage={bonjovi} linkTo={"BonJovi"}/>
        <Event artistName="Imagine Dragons" importedImage={imaginedragons} linkTo={"ImagineDragons"}/>
        <Event artistName="Iron Maiden" importedImage={ironmaiden} linkTo={"IronMaiden"}/>
        <Event artistName="Judas Priest" importedImage={judaspriest} linkTo={"JudasPriest"}/>
        <Event artistName="Ozzy Osbourne" importedImage={ozzyosbourne} linkTo={"OzzyOsbourne"}/>
        <Event artistName="Tame Impala" importedImage={tameimpala} linkTo={"TameImpala"}/>
      </div>
      <div className="event-button-container">
        <button className="event-load-more-button">Load More...</button>
      </div>
      <div className="divider"></div>
    </div>
  )
}

export default Events