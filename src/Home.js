import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';

import Crest1 from './img/crests/crest_1.png';
import Crest3 from './img/crests/crest_3.png';

import LucasPortrait from './img/portraits/lucas.png';
import SaqifPortrait from './img/portraits/saqif.png';
import MichaelPortrait from './img/portraits/michael.png';

import Placeholder from './img/placeholders/placeholder-square.jpeg';
import PlaceholderWide from './img/placeholders/placeholder-wide.jpeg';
import QuestionMark from './img/placeholders/question_mark.jpeg';

import FrogFamily from './img/scenes/frog_family.png';
import ArtificerForest from './img/scenes/artificer_forest.png';
import DemonChanging from './img/scenes/demon_changing.png';
import MoonMonkeyCathedral from './img/scenes/moon_monkey_cathedral.png';

import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { HashLink as Link } from 'react-router-hash-link';

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
      <div className="section--hero" style={ bgPosition(heroBgX, heroBgY) }>
        <div className="foreground" style={ bgPosition(heroFgX, heroFgY) }></div>
        <img src={Crest3} alt="family crest"/>
        <p><span className="logo">Lineage</span> is an experiment in interactive and collaborative world-building, using NFTs</p>
      </div>

      <div className="section section--about" id="about">
        <div className="content">
			    <div className="container-fluid">
            <div className="row margin-bottom-2">
              <div className="col-sm-12">
                <h2>Why is Lineage Special?</h2>
              </div>
              <div className="col-sm-6">
                <h5>Interconnected, Changing NFTs</h5>
                <p>Your crest inherits curses, newly learned abilities, and more from its parent. Crest holders will be able to change their crests and their descendents’ crests forever.</p>
                <h5>A Story-First, Art-Second World</h5>
                <p>We’ve created NFTs with a deep world behind them, not just a layer of paint on top. Every piece of art on your crest is chosen for a reason that ties back to the lore.</p>
              </div>
              <div className="col-sm-6">
                <img src={MoonMonkeyCathedral} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="slider">
        <div className="slider-row"></div>
      </div>

      <div className="section section--roadmap" id="roadmap">
        <div className="content">
			    <div className="container-fluid">
            <div className="row">
              <div className="col-sm-offset-3 col-sm-6">
                <h2 className="text--center">Lineage Roadmap</h2>
              </div>
            </div>

            <div className="row">

              <img className="roadmap__illustration" src={ArtificerForest} alt=""/>
              <img className="roadmap__illustration" src={DemonChanging} alt=""/>
              <img className="roadmap__illustration" src={FrogFamily} alt=""/>
              <img className="roadmap__illustration" src={MoonMonkeyCathedral} alt=""/>

              <div className="roadmap__line"></div>
              <div className="roadmap__line"></div>
              <div className="roadmap__line"></div>
              <div className="roadmap__line"></div>
            
              <div className="col-md-offset-2 col-md-6">
                <div className="card">
                  <div className="number">1</div>
                  <div className="content-chunk">
                    <h4>Mint your crest</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                  </div>
                </div>
              </div>
            
              <div className="col-md-offset-4 col-md-6">
                <div className="card">
                  <div className="number">2</div>
                  <div className="content-chunk">
                    <h4>List on solana marketplaces</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                  </div>
                </div>
              </div>
            
              <div className="col-md-offset-2 col-md-6">
                <div className="card card--special-1">
                  <div className="number">3</div>
                  <div className="content-chunk">
                    <h4>Lineage Moments in Time begin</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                  </div>
                </div>
              </div>
            
              <div className="col-md-offset-4 col-md-6">
                <div className="card">
                  <div className="number">4</div>
                  <div className="content-chunk">
                    <h4>Crest holders receive crest pin</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                  </div>
                </div>
              </div>
            
              <div className="col-md-offset-2 col-md-6">
                <div className="card">
                  <div className="number">5</div>
                  <div className="content-chunk">
                    <h4>Launch Merch store</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                  </div>
                </div>
              </div>
            
              <div className="col-md-offset-4 col-md-6">
                <div className="card">
                  <div className="number">6</div>
                  <div className="content-chunk">
                    <h4>Launch Twitter Banner Creator</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                  </div>
                </div>
              </div>
            
              <div className="col-md-offset-2 col-md-6">
                <div className="card">
                  <div className="number">7</div>
                  <div className="content-chunk">
                    <h4>Lineage Quests Begin</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                  </div>
                </div>
              </div>
            
              <div className="col-md-offset-4 col-md-6">
                <div className="card">
                  <div className="number">8</div>
                  <div className="content-chunk">
                    <h4>Lore Narrations Begin</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                  </div>
                </div>
              </div>
            
              <div className="col-md-offset-2 col-md-6">
                <div className="card card--special-1">
                  <div className="number">9</div>
                  <div className="content-chunk">
                    <h4>Future Development</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="divider">
        <div className="content">
          <hr />
        </div>
      </div>

      <div className="section section--races" id="races">
        <div className="content">
			    <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12 margin-bottom-2">
                <h2>8 Races, 4,000 Unique Crests</h2>
                <p>The Lineage Universe is home to many races that use crests to identify themselves in trade and war. Your crest will be a descendent to one of these 8 genesis families.</p>
              </div>
              <div className="col-sm-6">
                <img className="selected-race" src={QuestionMark} alt="race avatar 1"/>
                <div className="race-avatars">
                  <Link to=""><img src={QuestionMark} alt="race avatar 1"/></Link>
                  <Link to=""><img src={QuestionMark} alt="race avatar 2"/></Link>
                  <Link to=""><img src={QuestionMark} alt="race avatar 3"/></Link>
                  <Link to=""><img src={QuestionMark} alt="race avatar 4"/></Link>
                  <Link to=""><img src={QuestionMark} alt="race avatar 5"/></Link>
                  <Link to=""><img src={QuestionMark} alt="race avatar 6"/></Link>
                  <Link to=""><img src={QuestionMark} alt="race avatar 7"/></Link>
                  <Link to=""><img src={QuestionMark} alt="race avatar 8"/></Link>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="content-chunk">
                  <p>Deep within the whistling fields of rice rests a hidden community carved from the surrounding hillside. The paddies have been left undisturbed for centuries, save for the labor of many short, rough-skinned individuals. The rumors you’ve heard suggest that the grains in this region have been affected by a terrible blight; one that brings sentience to the creatures that reside here.</p>
                  <p>Horrendous monsters with features that may have been once considered arachnid in nature, large birds of prey that could lift a human in their talons with ease, serpents that lie awake in the dead of night waiting for poor lost souls to enter their ... <Link to="" className="colored">read more</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divider">
        <div className="content">
          <hr />
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
                <p>We're not afraid to dox ourselves &#8212; our founders are committed to seeing the Lineage world come to life and become a one-of-a-kind NFT experience.</p>
              </div>
              
              <div className="col-sm-4">
                <div className="profile-card">
                  <img src={LucasPortrait} alt="Lucas"/>
                  <div className="content-chunk">
                    <h4>Lucas<br /><span className="title">SOL Alchemist</span></h4>
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
                    <p>2,000+ hours of GM experience. Die hard critter and Dwarven Forge addict. Formerly @ GAP.</p>
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
                <p>The founders and creatives are just a small part of what makes the Lineage world turn. <Link className="colored" to="https://discord.gg/EVhzumCtMd" target="_blank">Join the discord</Link> to meet the other amazing members of our team and help shape Lineage to become the universe you envision.</p>
              </div>
            </div>
            <div className="row">

              {/* Ahtan */}
              <div className="col-sm-4">
                <div className="profile-card-small">
                  <div className="content-chunk">
                    <a target="_blank" href="https://www.instagram.com/ahtan_delmundo/">
                      <h4>@ahtan_delmundo<br /><span className="title">Crest Artist</span></h4>
                    </a>
                  </div>
                </div>
              </div>

              {/* Concept Artist 1 */}
              <div className="col-sm-4">
                <div className="profile-card-small">
                  <div className="content-chunk">
                    <a target="_blank" href="https://www.instagram.com/v__i__q/">
                      <h4>@v__i__q<br /><span className="title">Crest Concept Artist</span></h4>
                    </a>
                  </div>
                </div>
              </div>

              {/* Concept Artist 2 */}
              {/* <div className="col-sm-4">
                <div className="profile-card-small">
                  <div className="content-chunk">
                    <a target="_blank" href="#">
                      <h4>@anon<br /><span className="title">Crest Concept Artist</span></h4>
                    </a>
                  </div>
                </div>
              </div> */}

              {/* CB */}
              <div className="col-sm-4">
                <div className="profile-card-small">
                  <div className="content-chunk">
                    <a target="_blank" href="https://www.instagram.com/chahatbavanya">
                      <h4>@chahatbavanya<br /><span className="title">Lore Artist</span></h4>
                    </a>
                  </div>
                </div>
              </div>

              {/* Website Artist 2 */}
              {/* <div className="col-sm-4">
                <div className="profile-card-small">
                  <div className="content-chunk">
                    <a target="_blank" href="">
                      <h4>@anon<br /><span className="title">Lore Artist</span></h4>
                    </a>
                  </div>
                </div>
              </div> */}

              {/* Website Artist 3 */}
              {/* <div className="col-sm-4">
                <div className="profile-card-small">
                  <div className="content-chunk">
                    <a target="_blank" href="">
                      <h4>@anon<br /><span className="title">Lore Artist</span></h4>
                    </a>
                  </div>
                </div>
              </div> */}

              {/* Yoman */}
              <div className="col-sm-4">
                <div className="profile-card-small">
                  <div className="content-chunk">
                    <a target="_blank" href="https://twitter.com/yoman301">
                      <h4>@yoman301<br /><span className="title">World Builder</span></h4>
                    </a>
                  </div>
                </div>
              </div>

              {/* Sambino */}
              <div className="col-sm-4">
                <div className="profile-card-small">
                  <div className="content-chunk">
                    <a target="_blank" href="https://twitter.com/sambino">
                      <h4>@sambino<br /><span className="title">Community Manager</span></h4>
                    </a>
                  </div>
                </div>
              </div>

              {/* Community Manager */}
              <div className="col-sm-4">
                <div className="profile-card-small">
                  <div className="content-chunk">
                    <a target="_blank" href="https://twitter.com/nftyktty">
                      <h4>@nftyktty<br /><span className="title">Community Manager</span></h4>
                    </a>
                  </div>
                </div>
              </div>

              {/* Dusty */}
              <div className="col-sm-4">
                <div className="profile-card-small">
                  <div className="content-chunk">
                    <a href="">
                      <h4>@dustysky<br /><span className="title">Growth Engineer</span></h4>
                    </a>
                  </div>
                </div>
              </div>

              {/* FY */}
              <div className="col-sm-4">
                <div className="profile-card-small">
                  <div className="content-chunk">
                    <a href="">
                      <h4>@FY<br /><span className="title">Growth Engineer</span></h4>
                    </a>
                  </div>
                </div>
              </div>

              {/* Prince */}
              <div className="col-sm-4">
                <div className="profile-card-small">
                  <div className="content-chunk">
                    <a href="">
                      <h4>@prince<br /><span className="title">Growth Engineer</span></h4>
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
              <a className="button" href="https://discord.gg/EVhzumCtMd" target="_blank">Join the Discord</a>
              <br/>
              <br/>
            </div>
            <div className="col-sm-6">
              <img src={Crest1} alt="family crest 3" className="crest"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
