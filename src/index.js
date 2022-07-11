import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
// import IronMaiden from './components/TicketsPages/IronMaiden';
import { BuyPage } from './components/TicketsPages';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <App /> */}
    <Routes>
      <Route path="/" element={<App />} />
      {/* <Route path="ArcNorth" element={<ArcNorth />} />
      <Route path="ImagineDragons" element={<ImagineDragons />} />
      <Route path="Galantis" element={<Galantis />} />
      <Route path="Figure" element={<Figure />} />
      <Route path="Skrillex" element={<Skrillex />} />
      <Route path="TameImpala" element={<TameImpala />} /> */}
      <Route path="BuyPage" element={<BuyPage />} />
    </Routes>
  </BrowserRouter>
);