import React from 'react';
import TicketPage from './TicketPage/TicketPage';
import './TicketPage/scss/TicketPage.css'
import { judaspriest } from '../../assets';

const JudasPriest = () => {
  return (
    <>
      <TicketPage bandImage={judaspriest} bandName="Judas Priest"/>
    </>
  )
}

export default JudasPriest