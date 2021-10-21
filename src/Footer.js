import classNames from 'classnames';
import { FaDiscord, FaTwitter, FaInstagram, FaMedium } from 'react-icons/fa';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
  return (
    <div className="section--footer">
      <div className="content">
        <div className="container-fluid">
          <div className="col-sm-6">
            <Link to="/#" className="logo"><h3>Lineage</h3></Link>
            <p>Lineage is an experiment where you, the community, tells the story and your decisions affect the NFTs of others.</p>
            <p className="copyright">©2021 Lineage NFT. All rights reserved.</p>
          </div>
          <div className="col-sm-offset-3 col-sm-3">
            <div className="navigation">
              <Link to="/#">Home</Link>
              <Link to="/white_paper#">White Paper</Link>
              <Link to="/tos#">Terms of Service</Link>
            </div>
            <div className="socials">
              <a className="link--social" target="_blank" href="https://discord.gg/EVhzumCtMd"><FaDiscord /></a>
              <a className="link--social" target="_blank" href="https://twitter.com/lineagenft"><FaTwitter /></a>
              <a className="link--social" target="_blank" href="https://www.instagram.com/lineagenft/"><FaInstagram /></a>
              <a className="link--social" target="_blank" href="https://medium.com/@lineagenft"><FaMedium /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
