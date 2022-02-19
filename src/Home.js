import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';

import Crest1 from './img/crests/crest_4.png';
import Crest2 from './img/crests/crest_5.png';
import Crest3 from './img/crests/crest_6.png';

import DecisionsDiagram from './img/diagrams/decisions.jpg';
import TreeDiagram from './img/diagrams/tree.jpg';
import InheritanceDiagram from './img/diagrams/inheritance.jpg';

import ArtificerForest from './img/scenes/artificer_forest.png';

import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import { HashLink as Link } from 'react-router-hash-link';

import Faq from './Faq';
import Roadmap from './Roadmap';

const Home = () => {
  const sectionCommunity = useRef();
  const [scrollOffset, setScrollOffset] = useState(0);
  const [sectionCommunityOffset, setSectionCommunityOffset] = useState()

  useEffect(() => {
    const setOffset = () => {
      setScrollOffset(window.pageYOffset);
      setSectionCommunityOffset(sectionCommunity?.current?.offsetTop);
    }
    window.addEventListener('scroll', setOffset);
    return function cleanupListener() {
      window.removeEventListener('scroll', setOffset);
    }
  }, []);
  
  const heroBgX = scrollOffset/40 + 50;
  const heroBgY = scrollOffset/40 + 50;
  const heroFgX = scrollOffset/60 + 50;
  const heroFgY = scrollOffset/60 + 50;
  // const percentCommunity = window.innerHeight/(sectionCommunityOffset-scrollOffset);
  const communityBgX = (sectionCommunityOffset-scrollOffset)/25 + 50;
  const communityBgY = (sectionCommunityOffset-scrollOffset)/25 + 30;
  const bgPosition = (x, y) => {
    return { 'backgroundPosition': `${x}% ${y}%` };
  }

  return (
    <>
      {/* <div className="modal-bg">
        <div className="modal-fg">
          <h3>Title</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac vestibulum erat. Vivamus molestie turpis sem, eu placerat metus placerat ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas pretium diam ac ex rutrum venenatis. Nunc ex enim, sollicitudin quis libero vel, varius bibendum dui. Etiam vulputate nunc sit amet auctor pellentesque. Fusce at varius sapien, vel hendrerit felis. Integer iaculis turpis ac rhoncus tincidunt. Vestibulum euismod elit ut diam condimentum ultricies. Donec non tristique erat, eget vestibulum velit.</p>
          <a className="button">Got it</a>
        </div>
      </div> */}

      <div className="section--hero" style={ bgPosition(heroBgX, heroBgY) }>
        <div className="foreground" style={ bgPosition(heroFgX, heroFgY) }></div>
        <img src={Crest1} alt="family crest"/>
        <p><span className="logo">Lineage</span> is a connected NFT project set in the world of Kharth</p>
      </div>

      <div className="section section--about section--about--top" id="about">
        <div className="content">
			    <div className="container-fluid">

            <div className="row">
              <div className="col-md-offset-3 col-md-6">
                <h2>A CREST is your entrance into Lineage.</h2>
                <p>Each CREST is generative art with generative lore - the pieces of your family CREST identify significant historical events and details that set you apart from the CRESTs of your <b>ancestors</b> and <b>descendants.</b></p>
                {/* <img src={Crest3}/> */}
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <div className="slider">
        <div className="slider-row"></div>
      </div>
      
      <div className="section section--about section--about--bottom">
        <div className="content">
			    <div className="container-fluid">

            <div className="row margin-bottom-6">
              <div className="col-md-offset-3 col-md-6">
                <h2>Your CREST represents your family’s unique place in its lineage.</h2>
                <p>Lineage CRESTs (your NFT) are connected to one another via Lineages. Your Lineage is all the families you descended from; all of your ancestors and families from you.</p>
                <img src={TreeDiagram} />
              </div>
            </div>

            <div className="row margin-bottom-6">
              <div className="col-md-offset-3 col-md-6">
                <h2>Minting seeds the world with lore and the community expands it.</h2>
                <p>When you mint a Lineage CREST, we generate lore for why the represented family diverged from their ancestors. This lore will seed the worldbuilding that the community can take on.</p>
                <img src={ArtificerForest} />
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <Faq />
      <Roadmap />

      <div className="section section--community" style={ bgPosition(communityBgX, communityBgY) } ref={sectionCommunity}>
        <div className="content">
			    <div className="container-fluid">
            <div className="col-sm-6">
              <br />
              <br />
              <h2>Join the Community</h2>
              <p>The story has already begun. Suit up for adventure by joining our discord and preparing for launch.</p>
              <a href="https://discord.gg/FbxxaqVVCU" className="button" target="_blank">Join the Discord</a>
              <br/>
              <br/>
            </div>
            <div className="col-sm-6">
              <img src={Crest2} alt="family crest" className="crest"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
