import { useState, useEffect } from 'react';
import classNames from 'classnames';
import { FaTwitter, FaInstagram, FaMedium } from 'react-icons/fa';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { HashLink as Link } from 'react-router-hash-link';
import Wallet from './Wallet.js'

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const setOffset = () => {
      setScrollOffset(window.pageYOffset);
    }
    window.addEventListener('scroll', setOffset);
    return function cleanupListener() {
      window.removeEventListener('scroll', setOffset);
    }
  }, []);

  return (
    <div className={classNames('navbar', {
      secondary: scrollOffset > (window.innerHeight - 70),
      open: navbarOpen,
    })}>
      <div className="left">
        <Link to="/#" className="logo"><h3>Lineage</h3></Link>
        <Link to="/#about">About</Link>
        <Link to="/#roadmap">Roadmap</Link>
        {/* <Link to="/#races">Races</Link> */}
        <Link to="/#team">Team</Link>
        <Link to="/white_paper#">White Paper</Link>
      </div>
      <div className="right">
        <a className="link--social" target="_blank" href="https://twitter.com/lineagenft"><FaTwitter /></a>
        <a className="button" href="https://discord.gg/FbxxaqVVCU" target="_blank">Join the Discord</a>
        {/* <Wallet /> */}
      </div>
      <div className="navbar-controls">
        <a className="arrow-down" onClick={() => { setNavbarOpen(true); }}><MdKeyboardArrowDown /></a>
        <a className="arrow-up" onClick={() => { setNavbarOpen(false); }}><MdKeyboardArrowUp /></a>
      </div>
    </div>
  );
}

export default Navbar;
