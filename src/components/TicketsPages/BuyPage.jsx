import React, { useState } from "react";
import QRCode from "qrcode";
import { Link } from "react-router-dom";
import "./scss/BuyPage.css";
import PCoinABI from "./PCoin.json";
import TicketsABI from "./Tickets.json";
import { ethers } from "ethers";

const BuyPage = () => {
  const [qrCodeShouldShow, setQrCodeShouldShow] = useState(false);
  const [showMintButton, setShowMintButton] = useState(false);

  async function connectAccount() {
    if (window.ethereum != "undefined") {
      await window.ethereum.request({
        method: "eth_requestAccounts",
      });
    } else {
      alert("Metamask not installed!");
    }
  }

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  // PCOIN
  const pCoinAddress = "0x67e3195D1DDdeeFE52204C4ddC037c932fd80EB7";
  const pCoinABI = PCoinABI.abi;
  const PCoinContract = new ethers.Contract(pCoinAddress, pCoinABI, signer);
  const masterAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
  // PCOIN (END)

  // TICKETS CONTRACT
  const ticketsAddress = "0x728c1f10a9f1A5e08b71F9b1718e75FB8c905521";
  const ticketsABI = TicketsABI.abi;
  const ticketsContract = new ethers.Contract(
    ticketsAddress,
    ticketsABI,
    signer
  );
  // TICKETS CONTRACT (END)

  const [src, setSrc] = useState("");

  const buyTicket = async (qrData) => {
    try {
      QRCode.toDataURL(qrData).then((data) => {
        setSrc(data);
      });
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  // TRANSACTION FIRST
  const makeCoinTransfer = async () => {
    const ownsATicket = await ticketsContract.ownsATicketCheck();
    if (ownsATicket) {
      alert("This address already owns a ticket. Try a different address");
    } else {
      await PCoinContract.transfer(masterAddress, 40);
      setShowMintButton(true);
    }
  };
  // TRANSACTION FIRST (END)

  const ticketActivate = async () => {
    try {
      const ticketMint = await ticketsContract.mint(1);
      const ticketReturn = await ticketsContract.fetchQRCode(1, ticketMint.from);
      setShowMintButton(false);
      setQrCodeShouldShow(true);
      buyTicket(ticketReturn);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  // GET QRCODE
  const [addressValue, setAddressValue] = useState("");

  const getAddressForQRCode = (e) => {
    const newValue = e.target.value;
    setAddressValue(newValue);
  };

  const fetchTicket = async () => {
    try {
      let ticketReturn = await ticketsContract.fetchQRCode(1, addressValue);
      setQrCodeShouldShow(true);
      buyTicket(ticketReturn);
    } catch (error) {
      console.log("Error: ", error);
      alert("Something went wrong! Make sure you entered a valid address");
    }
  };
  // GET QRCODE (END)

  return (
    <div className="buy-page-container">
      <div className="go-back-link-container">
        <Link to="/" className="go-back-link">
          Go Back!
        </Link>
      </div>
      {showMintButton == false ? (
        <>
          {qrCodeShouldShow == false ? (
            <center>
              <div className="divider"></div>
              <h3>Price: 40 PCoins</h3>
              <button onClick={connectAccount} className="connect-wallet-btn">
                Connect Wallet
              </button>
              <button onClick={makeCoinTransfer} className="buy-ticket-btn">
                Buy Ticket for 40PCoins
              </button>
              <div className="divider"></div>
              <p>Already bought ticket?</p>
              <input
                placeholder="Enter Address"
                onChange={getAddressForQRCode}
              />
              <button onClick={fetchTicket} className="buy-ticket-btn">
                Fetch QRCode
              </button>
            </center>
          ) : (
            <>
              <div className="divider"></div>
              <p>Show this QRcode in the line to enter the event area!</p>
              <div className="qrcode-container">
                <img src={src} />
              </div>
              <div className="divider"></div>
            </>
          )}
        </>
      ) : (
        <>
          <button className="buy-ticket-btn" onClick={ticketActivate}>
            Mint Ticket
          </button>
        </>
      )}
    </div>
  );
};

export default BuyPage;
