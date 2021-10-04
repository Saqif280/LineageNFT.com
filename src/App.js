import logo from './logo.svg';
import './App.scss';
import { IconContext } from "react-icons";
import { FaDiscord, FaTwitter, FaInstagram, FaMedium } from 'react-icons/fa';

function App() {
  return (
    <div className="app">
      <div className="section--hero">
        <h1>Lineage</h1>
        {/* <p>Shape the world - it’s yours after all.</p> */}
        <div className="socials">
          <a className="link--social" target="_blank" href="https://discord.gg/EVhzumCtMd"><FaDiscord /></a>
          <a className="link--social" target="_blank" href="https://twitter.com/lineagenft"><FaTwitter /></a>
          <a className="link--social" target="_blank" href="https://www.instagram.com/lineagenft/"><FaInstagram /></a>
          <a className="link--social" target="_blank" href="https://medium.com/@lineagenft"><FaMedium /></a>
        </div>
      </div>
    </div>
  );
}

export default App;
