import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { FaDiscord, FaTwitter, FaInstagram, FaMedium } from 'react-icons/fa';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import Home from './Home';
import WhitePaper from './WhitePaper';
import TermsOfService from './TermsOfService';


const App = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setScrollOffset(window.pageYOffset);
    }
  }, []);

  return (
    <div className="app">
      <Router>
        <div className={classNames('navbar', {
          secondary: scrollOffset > (window.innerHeight - 70),
          open: navbarOpen,
        })}>
          <div className="left">
            <Link to="/#" className="logo"><h3>Lineage</h3></Link>
            <Link to="/#about">About</Link>
            <Link to="/#roadmap">Roadmap</Link>
            <Link to="/#team">Team</Link>
          </div>
          <div className="right">
            <a className="link--social" target="_blank" href="https://twitter.com/lineagenft"><FaTwitter /></a>
            <a className="link--social" target="_blank" href="https://www.instagram.com/lineagenft/"><FaInstagram /></a>
            <a className="link--social" target="_blank" href="https://medium.com/@lineagenft"><FaMedium /></a>
            <a className="button" href="https://discord.gg/EVhzumCtMd" target="_blank">Join the Discord</a>
          </div>
          <div className="navbar-controls">
            <a className="arrow-down" onClick={() => { setNavbarOpen(true); }}><MdKeyboardArrowDown /></a>
            <a className="arrow-up" onClick={() => { setNavbarOpen(false); }}><MdKeyboardArrowUp /></a>
          </div>
        </div>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/white_paper">
            <WhitePaper />
          </Route>
          <Route path="/smart_contract">
          </Route>
          <Route path="/tos">
            <TermsOfService />
          </Route>
        </Switch>

        <div className="section--footer">
          <div className="content">
            <div className="container-fluid">
              <div className="col-sm-6">
                <Link to="/#" className="logo"><h3>Lineage</h3></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
      </Router>
    </div>
  );
}

export default App;
