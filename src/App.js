import './scss/App.css'
import { Events, Extra, Footer } from './components/index';

function App() {
  return (
    <div className="full-app-container">
      {/* <Header /> */}
      <Events />
      <Extra />
      <Footer />
    </div>
  );
}

export default App;
