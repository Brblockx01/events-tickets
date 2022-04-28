import React from 'react';
import TicketPage from './TicketPage/TicketPage';
import './TicketPage/scss/TicketPage.css'
import { ozzyosbourne } from '../../assets';

const OzzyOsbourne = () => {
  return (
    <>
      <TicketPage bandImage={ozzyosbourne} bandName="Ozzy Osbourne"/>
    </>
  )
}

export default OzzyOsbourne