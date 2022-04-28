import './scss/App.css'
import { Events, Extra, Footer } from './components/index';
// import IronMaiden from './components/TicketsPages/IronMaiden';

function App() {
  return (
    <div className="full-app-container">
      <Events />
      <Extra />
      <Footer />
    </div>
  );
}

export default App;
