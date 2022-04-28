import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
// import IronMaiden from './components/TicketsPages/IronMaiden';
import { BonJovi, ImagineDragons, IronMaiden, JudasPriest, OzzyOsbourne, TameImpala  } from './components/TicketsPages';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <App /> */}
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="BonJovi" element={<BonJovi />} />
      <Route path="ImagineDragons" element={<ImagineDragons />} />
      <Route path="IronMaiden" element={<IronMaiden />} />
      <Route path="JudasPriest" element={<JudasPriest />} />
      <Route path="OzzyOsbourne" element={<OzzyOsbourne />} />
      <Route path="TameImpala" element={<TameImpala />} />
    </Routes>
  </BrowserRouter>
);