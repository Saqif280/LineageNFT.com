import Crest1 from './img/crest_1.png';
import Crest2 from './img/crest_2.png';
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

      <div className="section">
        <div className="content">
			    <div className="container-fluid">
            <div className="col-sm-6 padding-0">
              <h2>10 Family Lines,<br/>10,000 Family Crests</h2>
              <p>In Lineage, your NFT is your family crest, representing one generation, of one branch, of a renowned family. It's a grand experiment where you, the community, tells the story and your decisions affect others. Where token holders opt in to events in the world that will change their fate, and that of their descendants, forever.</p>
            </div>
            <div className="col-sm-6 padding-0">
              <img src={Crest1} alt="family crest 1" className="crest crest--1"/>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
      </div>

      <div className="section--footer">
      </div>

    </div>
  );
}

export default App;
