import React from 'react';
import TicketPage from './TicketPage/TicketPage';
import './TicketPage/scss/TicketPage.css'
import { ironmaiden } from '../../assets';

const IronMaiden = () => {
  return (
    <div className='tickets-page-container'>
      <TicketPage bandImage={ironmaiden} bandName="Iron Maiden"/>
    </div>
  )
}

export default IronMaiden