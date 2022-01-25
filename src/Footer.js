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
            <p>Lineage is a connected NFT project set in the world of Kharth</p>
            <p className="copyright">©2021 Lineage. All rights reserved.</p>
          </div>
          <div className="col-sm-offset-3 col-sm-3">
            <div className="navigation">
              {/* <Link to="/#">Home</Link> */}
              {/* <Link to="/white_paper#">White Paper</Link> */}
              {/* <Link to="/tos#">Terms of Service</Link> */}
            </div>
            <div className="socials">
              <a className="link--social" target="_blank"><FaDiscord /></a>
              <a className="link--social" target="_blank" href="https://twitter.com/lineagenft"><FaTwitter /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
