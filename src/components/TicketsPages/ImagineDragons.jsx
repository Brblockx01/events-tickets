import React from 'react';
import TicketPage from './TicketPage/TicketPage';
import './TicketPage/scss/TicketPage.css'
import { imaginedragons } from '../../assets';

const ImagineDragons = () => {
  return (
    <>
      <TicketPage bandImage={imaginedragons} bandName="Imagine Dragons"/>
    </>
  )
}

export default ImagineDragons