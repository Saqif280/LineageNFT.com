import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';

import Crest1 from './img/crests/crest_4.png';
import Crest2 from './img/crests/crest_5.png';

import DecisionsDiagram from './img/diagrams/decisions.jpg';
import TreeDiagram from './img/diagrams/tree.jpg';
import InheritanceDiagram from './img/diagrams/inheritance.jpg';

import LucasPortrait from './img/portraits/lucas-cropped.png';
import SaqifPortrait from './img/portraits/saqif-cropped.png';
import MichaelPortrait from './img/portraits/michael-cropped.png';

import QuestionMark from './img/placeholders/question_mark.jpeg';
import PlaceholderBanner from './img/placeholders/placeholder-banner.png';
import PlaceholderSquare from './img/placeholders/placeholder-square.jpeg';

import FrogFamily from './img/scenes/frog_family.png';
import ArtificerForest from './img/scenes/artificer_forest.png';
import DemonChanging from './img/scenes/demon_changing-2.png';
import MoonMonkeyCathedral from './img/scenes/moon_monkey_cathedral.png';

import Artificer from './img/races/artificer.jpg';
import Frog from './img/races/frog.jpg';
import Owl from './img/races/owl.jpg';

import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { HashLink as Link } from 'react-router-hash-link';

const Home = () => {
  // const inheritanceVideo = useRef();
  const sectionCommunity = useRef();
  const [scrollOffset, setScrollOffset] = useState(0);
  const [sectionCommunityOffset, setSectionCommunityOffset] = useState()

  useEffect(() => {
    // if (inheritanceVideo.current) inheritanceVideo.current.play();
    const setOffset = () => {
      setScrollOffset(window.pageYOffset);
      setSectionCommunityOffset(sectionCommunity?.current?.offsetTop);
    }
    window.addEventListener('scroll', setOffset);
    return function cleanupListener() {
      window.removeEventListener('scroll', setOffset);
    }
  }, []);
  
  const heroBgX = scrollOffset/25 + 50;
  const heroBgY = scrollOffset/25 + 50;
  const heroFgX = scrollOffset/50 + 50;
  const heroFgY = scrollOffset/50 + 50;
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
        <p><span className="logo">LoreDAO</span> is a collaboratively built, collectively owned fantasy world</p>
      </div>

      <div className="section section--about" id="about">
        <div className="content">
			    <div className="container-fluid">

            <div className="row margin-bottom-6">
              <div className="col-md-offset-3 col-md-6">
                <h2>A CREST is your entrance into LoreDAO.</h2>
                <p>Each CREST is a generative art with generative lore - the pieces of your family crest identify significant historical events and details that set you apart from your ancestor crests.</p>
                <img src={Crest2}/>
              </div>
            </div>

            <div className="row margin-bottom-6">
              <div className="col-md-offset-3 col-md-6">
                <h2>Your CREST represents your family’s unique place in its lineage</h2>
                <p>LoreDAO Crests (your NFT) are connected to one another via Lineages. Your Lineage is all the families you descended from; all of your ancestors and families from you.</p>
                <img src={TreeDiagram} />
              </div>
            </div>

            <div className="row margin-bottom-6">
              <div className="col-md-offset-3 col-md-6">
                <h2>Minting seeds the world with lore and the DAO expands it.</h2>
                <p>When you mint a LoreDAO CREST, we generate lore for why the represented family diverged from their ancestors. This lore will seed the worldbuilding that the DAO will take on.</p>
                <img src={ArtificerForest} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="slider">
        <div className="slider-row"></div>
      </div> */}

      <div className="section section--roadmap" id="roadmap">
        <div className="content">
			    <div className="container-fluid">
            <div className="row margin-bottom-6">
              <div className="col-md-offset-0 col-md-12">
                <h2 className="text--center">LoreDAO FAQ</h2>
              </div>
            </div>

            <div className="row equal">
            
              <div className="col-md-6">
                <div className="card-wrapper">
                  <div className="card">
                    <div className="number">1</div>
                    <div className="content-chunk">
                      <h4>What is LoreDAO?</h4>
                      <p>LoreDAO is a decentralized approach to world building. Traditional universes are created and owned by central organizations (like Marvel or Game of Thrones). LoreDAO gives you the opportunity to develop and own a piece of a fantasy intellectual property that we create together.</p>
                    </div>
                  </div>
                </div>
                
                <div className="card-wrapper">
                  <div className="card">
                    <div className="number">2</div>
                    <div className="content-chunk">
                      <h4>Why join LoreDAO?</h4>
                      <p>After mint, the DAO will continue the development of the intellectual property. As a token holder, you will be able to shape the lore of the world. The IP can then be licensed out for writings, videos, and other NFT projects.</p>
                    </div>
                  </div>
                </div>
                <div className="card-wrapper">
                  <div className="card">
                    <div className="number">3</div>
                    <div className="content-chunk">
                      <h4>What do I get when I mint a LoreDAO NFT?</h4>
                      <p>To join the community, you mint a CREST that represents a family in the world of Kharth. Upon mint, we create generative lore that is unique to your family and based on your ancestry. You own and act as this family, shaping the history of the universe. This CREST gives you access to the DAO and makes you an equal owner of the project forever.</p>
                    </div>
                  </div>
                </div>
              </div>
            
              <div className="col-md-6 bg-moon-monkey"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="section" id="team">
        <div className="content">
			    <div className="container-fluid">
            <div className="row margin-bottom-6">
              <div className="col-sm-6">
                <h2>The Fellowship</h2>
              </div>
              <div className="col-sm-6">
                <p>We're not afraid to dox ourselves &#8212; our founders are committed to seeing Karth come to life and become a one-of-a-kind NFT experience.</p>
              </div>
              
              <div className="col-sm-4">
                <div className="profile-card">
                  <img src={LucasPortrait} alt="Lucas"/>
                  <div className="content-chunk">
                    <h4>Lucas<br /><span className="title">ETH Alchemist</span></h4>
                    <p>7+ years of software development experience. Formerly @ Apple. Fantasy nerd since age 4.</p>
                    <div className="socials">
                      <a className="link--social" target="_blank" href="https://www.linkedin.com/in/lucasdellabella/"><FaLinkedin /></a>
                      <a className="link--social" target="_blank" href="https://twitter.com/heylucas_eth"><FaTwitter /></a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-sm-4">
                <div className="profile-card">
                  <img src={SaqifPortrait} alt="Saqif"/>
                  <div className="content-chunk">
                    <h4>Saqif<br /><span className="title">Web Artificer</span></h4>
                    <p>7+ years of web development experience. Formerly @ Yelp. Fan of the Sugandese Universe.</p>
                    <div className="socials">
                      <a className="link--social" target="_blank" href="https://www.linkedin.com/in/saqif/"><FaLinkedin /></a>
                      <a className="link--social" target="_blank" href="https://twitter.com/FungMeButt"><FaTwitter /></a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-sm-4">
                <div className="profile-card">
                  <img src={MichaelPortrait} alt="Michael"/>
                  <div className="content-chunk">
                    <h4>Michael<br /><span className="title">Lore Wizard</span></h4>
                    <p>2,000+ hours of GM experience. Die hard critter and Dwarven Forge addict. Formerly @ GAP Inc.</p>
                    <div className="socials">
                      <a className="link--social" target="_blank" href="https://www.linkedin.com/in/michaelgguo/"><FaLinkedin /></a>
                      {/* <a className="link--social" target="_blank" href="#"><FaTwitter /></a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <h3>Other Party Members</h3>
                <p>The founders and creatives are just a small part of what makes the LoreDAO world turn. <Link className="colored" target="_blank">Join the discord</Link> to meet the other amazing members of our team and help shape Karth to become the universe you envision.</p>
              </div>
            </div>
            <div className="row">

              {/* Ahtan */}
              <div className="col-md-4 col-sm-6">
                <div className="profile-card-small">
                  <div className="content-chunk">
                    <a target="_blank" href="https://www.instagram.com/ahtan_delmundo/">
                      <h4>@ahtan_delmundo<br /><span className="title">Crest Artist</span></h4>
                    </a>
                  </div>
                </div>
              </div>

              {/* Art Coordinator */}
              {/* <div className="col-md-4 col-sm-6">
                <div className="profile-card-small">
                  <div className="content-chunk">
                    <a target="_blank" href="https://www.instagram.com/v__i__q/">
                      <h4>@v__i__q<br /><span className="title">Concept Artist</span></h4>
                    </a>
                  </div>
                </div>
              </div> */}

              {/* Concept Artist 1 */}
              <div className="col-md-4 col-sm-6">
                <div className="profile-card-small">
                  <div className="content-chunk">
                    <a target="_blank" href="https://www.instagram.com/v__i__q/">
                      <h4>@v__i__q<br /><span className="title">Concept Artist</span></h4>
                    </a>
                  </div>
                </div>
              </div>

              {/* CB */}
              <div className="col-md-4 col-sm-6">
                <div className="profile-card-small">
                  <div className="content-chunk">
                    <a target="_blank" href="https://www.instagram.com/chahatbavanya">
                      <h4>@chahatbavanya<br /><span className="title">Lore Artist</span></h4>
                    </a>
                  </div>
                </div>
              </div>

              {/* Yoman */}
              <div className="col-md-4 col-sm-6">
                <div className="profile-card-small">
                  <div className="content-chunk">
                    <a target="_blank" href="https://twitter.com/yoman301">
                      <h4>@yoman301<br /><span className="title">World Builder</span></h4>
                    </a>
                  </div>
                </div>
              </div>

              {/* Sambino */}
              <div className="col-md-4 col-sm-6">
                <div className="profile-card-small">
                  <div className="content-chunk">
                    <a target="_blank" href="https://twitter.com/sambino">
                      <h4>@sambino<br /><span className="title">Community Manager</span></h4>
                    </a>
                  </div>
                </div>
              </div>

              {/* Community Manager */}
              <div className="col-md-4 col-sm-6">
                <div className="profile-card-small">
                  <div className="content-chunk">
                    <a target="_blank" href="https://twitter.com/nftyktty">
                      <h4>@nftyktty<br /><span className="title">Community Manager</span></h4>
                    </a>
                  </div>
                </div>
              </div>

              {/* Prince */}
              <div className="col-md-4 col-sm-6">
                <div className="profile-card-small">
                  <div className="content-chunk">
                    <a href="">
                      <h4>@prince<br /><span className="title">Growth Engineer</span></h4>
                    </a>
                  </div>
                </div>
              </div>

              {/* Dusty */}
              <div className="col-md-4 col-sm-6">
                <div className="profile-card-small">
                  <div className="content-chunk">
                    <a href="">
                      <h4>@dustysky<br /><span className="title">Growth Engineer</span></h4>
                    </a>
                  </div>
                </div>
              </div>

              {/* FY */}
              <div className="col-md-4 col-sm-6">
                <div className="profile-card-small">
                  <div className="content-chunk">
                    <a href="">
                      <h4>@FY<br /><span className="title">Growth Engineer</span></h4>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="section section--community"  style={ bgPosition(communityBgX, communityBgY) } ref={sectionCommunity}>
        <div className="content">
			    <div className="container-fluid">
            <div className="col-sm-6">
              <br />
              <br />
              <h2>Join the Community</h2>
              <p>The story has already begun. Suit up for adventure by joining our discord and preparing for mint. Your crest and legacy await you.</p>
              <a className="button" target="_blank">Join the Discord</a>
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
