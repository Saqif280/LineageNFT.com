import logo from './logo.svg';
import './App.scss';
import { IconContext } from "react-icons";
import { FaDiscord, FaTwitter } from 'react-icons/fa';

function App() {
  return (
    <div className="app">
      <div className="section--hero">
        <h1>Lineage</h1>
        <p>Shape the world - it’s yours after all.</p>
        <div className="socials">
          <a className="link--social" href="#"><FaDiscord /></a>
          <a className="link--social" href="#"><FaTwitter /></a>
        </div>
      </div>
    </div>
  );
}

export default App;
