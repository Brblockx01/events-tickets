import React from 'react';
import Event from './Event/Event';
import './scss/Events.css';
import { arcnorth, imaginedragons, galantis, figure, skrillex, tameimpala, thechainsmokers, djsnake, calvinharris } from '../../assets';
import { Link } from 'react-router-dom';
// import { Routes, Route } from "react-router-dom";

const Events = () => {
  return (
    <div className='events-container'>
      {/* <Routes>
        <Route path="IronMaiden" element={<IronMaiden />} />
      </Routes> */}
      <div className='header-container'>
      <div className="logo-container">
        <h1>ELECTRIC SUMMER FESTIVAL</h1>
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
          <p>Assist our event sit amet consectetur <br />
          Bring money for drinks. Minima libero expedita <br />
          World class artists temporibus saepe dolor <br />
          Take a look at the artists that will <br />
          assist the event.</p>
        </div>
      </div>
      <div className="event-cards-container">
        <Event artistName="Arc North" importedImage={arcnorth} />
        <Event artistName="Tame Impala" importedImage={tameimpala} />
        <Event artistName="Imagine Dragons" importedImage={imaginedragons} />
        <Event artistName="The Chainsmokers" importedImage={thechainsmokers} />
        <Event artistName="Galantis" importedImage={galantis} />
        <Event artistName="Figure" importedImage={figure} />
        <Event artistName="Skrillex" importedImage={skrillex} />
        <Event artistName="DJ Snake" importedImage={djsnake} />
        <Event artistName="Calvin Harris" importedImage={calvinharris} />
      </div>
      <div className="event-button-container">
        {/* <button className="event-load-more-button">Show More Artists...</button> */}
        <Link to="BuyPage" className="event-load-more-button">Buy Tickets For Event</Link>
        {/* <Link></Link> */}
      </div>
      <div className="divider"></div>
    </div>
  )
}

export default Events