import React, { useState } from 'react';
import classNames from 'classnames';
import Crest1 from './img/crest_1.png';
import Crest3 from './img/crest_3.png';
import Placeholder from './img/placeholder-square.jpeg';
import PlaceholderWide from './img/placeholder-wide.jpeg';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { HashLink as Link } from 'react-router-hash-link';

const Home = () => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const MIN_PAGE = 1;
  const MAX_PAGE = 4;

  const turnPageLeft = () => {
    const nextPageNumber = currentPageNumber - 1;
    if (nextPageNumber < MIN_PAGE) return;
    setCurrentPageNumber(nextPageNumber);
  };

  const turnPageRight = () => {
    const nextPageNumber = currentPageNumber + 1;
    if (nextPageNumber > MAX_PAGE) return;
    setCurrentPageNumber(nextPageNumber);
  };

  return (
    <>
      <div className="section--hero">
        <img src={Crest1} alt="family crest"/>
        <p><span className="logo">Lineage</span> is an experiment where you, the community, tells the story and your decisions affect the NFTs of others.</p>
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
                <img src={Placeholder} alt=""/>
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
            <div className="col-sm-offset-3 col-sm-6">
              <h2 className="text--center">Lineage Roadmap</h2>
            </div>
          </div>
          {/* <div className="card-navigation">
            <a onClick={turnPageLeft} className={classNames({ 'disabled': currentPageNumber === MIN_PAGE })}>
              <MdKeyboardArrowLeft />
            </a>
            <a onClick={turnPageRight} className={classNames({ 'disabled': currentPageNumber === MAX_PAGE })}>
              <MdKeyboardArrowRight />
            </a>
          </div>
			    <div className="cards">
            <div 
              className={
                classNames('card', {
                  'flipped': currentPageNumber > 1,
                })
              }
            >
              <h4>Chapter 1</h4>
              <h3>Mint Crests</h3>
              <p>We begin by discovering the skeleton of a world and its histories during the minting process. Read about it <Link to="/white_paper#" className="colored">here</Link>.</p>
              <img src={Placeholder} alt="illustration"/>
            </div>

            <div 
              className={
                classNames('card', {
                  'flipped': currentPageNumber > 2,
                })
              }
            >
              <h4>Chapter 2</h4>
              <h3>Interactive Lore Events</h3>
              <p>Seven weekends this winter there will be a Moment In Time where you make decisions to change your crest and others’. Read more <Link to="/white_paper#" className="colored">here</Link>.</p>
              <img src={Placeholder} alt="illustration"/>
            </div>

            <div 
              className={
                classNames('card', {
                  'flipped': currentPageNumber > 3,
                })
              }
            >
              <h4>Chapter 3</h4>
              <h3>Bringing Lineage into the Real World</h3>
              <p>Crest holders get to participate in real world events (think Cicada 3301), receive enamel pins of their genesis family, and <Link to="/white_paper#" className="colored">more</Link>.</p>
              <img src={Placeholder} alt="illustration"/>
            </div>

            <div 
              className={
                classNames('card', {
                  'flipped': currentPageNumber > 4,
                })
              }
            >
              <h4>Chapter 4</h4>
              <h3>Continued Development</h3>
              <p>We use 4,000 SOL of mint funds (based on the current mint price) to continue expanding the universe, with new projects from the world we’ve discovered. Read more <Link to="/white_paper#" className="colored">here</Link>.</p>
              <img src={Placeholder} alt="illustration"/>
            </div>
          </div> */}
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
              <div className="col-sm-12">
                <h2>8 Races, 4,000 Unique Crests</h2>
                <p>The Lineage Universe is home to many races that use crests to identify themselves in trade and war. Your crest will be a descendent to one of these 8 genesis families.</p>
                <div className="race-avatars">
                  <Link to="/#"><img src={Placeholder} alt="race avatar 1"/></Link>
                  <Link to="/#"><img src={Placeholder} alt="race avatar 1"/></Link>
                  <Link to="/#"><img src={Placeholder} alt="race avatar 1"/></Link>
                  <Link to="/#"><img src={Placeholder} alt="race avatar 1"/></Link>
                  <Link to="/#"><img src={Placeholder} alt="race avatar 1"/></Link>
                  <Link to="/#"><img src={Placeholder} alt="race avatar 1"/></Link>
                  <Link to="/#"><img src={Placeholder} alt="race avatar 1"/></Link>
                  <Link to="/#"><img src={Placeholder} alt="race avatar 1"/></Link>
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
                <p>We're not afraid to dox ourselves &#8212; our team is committed to seeing the Lineage world come to life and become a one-of-a-kind NFT experience.</p>
              </div>
              
              <div className="col-sm-4">
                <div className="profile-card">
                  <img src={Placeholder} alt="Lucas"/>
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
                  <img src={Placeholder} alt="Saqif"/>
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
                  <img src={Placeholder} alt="Michael"/>
                  <div className="content-chunk">
                    <h4>Michael<br /><span className="title">Lore Wizard</span></h4>
                    <p>2,000+ hours of Game Master experience. Die hard critter and Dwarven Forge addict. Formerly @ GAP.</p>
                    <div className="socials">
                      <a className="link--social" target="_blank" href="https://www.linkedin.com/in/michaelgguo/"><FaLinkedin /></a>
                      <a className="link--social" target="_blank" href="#"><FaTwitter /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <h3>Other Party Members</h3>
                <p>The founders and creatives are just a small part of what makes the Lineage world turn. <Link className="colored" href="https://discord.gg/EVhzumCtMd" target="_blank">Join the discord</Link> to meet the other amazing members of our team and help shape Lineage to become the universe you envision.</p>
              </div>
            </div>
            <div className="row">

              <div className="col-sm-4">
                <div className="profile-card-small">
                  <div className="content-chunk">
                    <a target="_blank" href="https://www.instagram.com/ahtan_delmundo/">
                      <h4>@ahtan_delmundo<br /><span className="title">Crest Artist</span></h4>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="profile-card-small">
                  <div className="content-chunk">
                    <a target="_blank" href="https://twitter.com/sambino">
                      <h4>@sambino<br /><span className="title">Community Manager</span></h4>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="profile-card-small">
                  <div className="content-chunk">
                    <a target="_blank" href="https://twitter.com/yoman301">
                      <h4>@yoman301<br /><span className="title">World Builder</span></h4>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="profile-card-small">
                  <div className="content-chunk">
                    <a target="_blank" href="#">
                      <h4>@prince<br /><span className="title">Growth Engineer</span></h4>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="profile-card-small">
                  <div className="content-chunk">
                    <a target="_blank" href="#">
                      <h4>@?<br /><span className="title">Team Member</span></h4>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="profile-card-small">
                  <div className="content-chunk">
                    <a target="_blank" href="#">
                      <h4>@?<br /><span className="title">Team Member</span></h4>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="section section--community">
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
              <img src={Crest3} alt="family crest 3" className="crest"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
