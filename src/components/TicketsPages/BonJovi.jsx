import React from 'react';
import TicketPage from './TicketPage/TicketPage';
import './TicketPage/scss/TicketPage.css'
import { bonjovi } from '../../assets';

const BonJovi = () => {
  return (
    <>
      <TicketPage bandImage={bonjovi} bandName="Bon Jovi"/>
    </>
  )
}

export default BonJovi