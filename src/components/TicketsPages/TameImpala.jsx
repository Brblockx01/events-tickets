import React from 'react';
import TicketPage from './TicketPage/TicketPage';
import './TicketPage/scss/TicketPage.css';
import { tameimpala } from '../../assets';

const TameImpala = () => {
  return (
    <>
      <TicketPage bandImage={tameimpala} bandName="Tame Impala"/>
    </>
  )
}

export default TameImpala