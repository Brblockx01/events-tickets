import QRCode from 'qrcode';
import { HiLocationMarker } from 'react-icons/hi';
import React, { useState } from 'react';
import { ethers, BigNumber } from 'ethers';
import bCoinAbi from '../../BCoin.json';
import { Link } from 'react-router-dom';

const BCoinAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

const TicketPage = ({ bandName, bandImage }) => {

  const connectWallet = async () => {
    if(window.ethereum !== 'undefined') {
      await window.ethereum.request({
        method: "eth_requestAccounts",
      });
    } else {
      alert("Metamask not installed");
    }
  }

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const BCoinContract = new ethers.Contract(BCoinAddress, bCoinAbi.abi, signer);

  const mainAddress = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";

  const [src, setSrc] = useState('');

  const buyTicket = async () => {
    try {
      const transactionCompleted = await BCoinContract.transfer(mainAddress, 20);
      QRCode.toDataURL(transactionCompleted.from).then((data) => {
        setSrc(data)
      });
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  return (
    <div className='ticket-page-container'>
      <div className="go-back-link-container">
        <Link to="/" className='go-back-link'>Go Back!</Link>
      </div>
      <div className="divider"></div>
      <div className="tikcet-band-image-container">
        <img className='tikcet-band-image' src={bandImage}/>
      </div>
      <h1>{bandName}</h1>
      <h3>XX/XX/XXXX</h3>
      <div className='location-icon-container'>
        <h3>Event Location</h3>
        <HiLocationMarker className='location-icon' />
      </div>
      <div className="divider"></div>
      <div className="buy-tickets-btn-container">
        <button className="buy-tickets-btn" onClick={connectWallet}>Connect Wallet</button>
        <button className="buy-tickets-btn" onClick={buyTicket}>Buy Tickets</button>
      </div>
      <div className="qrcode-container">
        <img src={src} />
      </div>
    </div>
  )
}

export default TicketPage