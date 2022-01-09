import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";

import Crest1 from "./img/crests/crest_4.png";
import Crest2 from "./img/crests/crest_5.png";

import DecisionsDiagram from "./img/diagrams/decisions.jpg";
import TreeDiagram from "./img/diagrams/tree.jpg";
import InheritanceDiagram from "./img/diagrams/inheritance.jpg";

import LucasPortrait from "./img/portraits/lucas.png";
import SaqifPortrait from "./img/portraits/saqif.png";
import MichaelPortrait from "./img/portraits/michael.png";

import QuestionMark from "./img/placeholders/question_mark.jpeg";
import PlaceholderBanner from "./img/placeholders/placeholder-banner.png";
import PlaceholderSquare from "./img/placeholders/placeholder-square.jpeg";

import FrogFamily from "./img/scenes/frog_family.png";
import ArtificerForest from "./img/scenes/artificer_forest.png";
import DemonChanging from "./img/scenes/demon_changing-2.png";
import MoonMonkeyCathedral from "./img/scenes/moon_monkey_cathedral.png";

import Artificer from "./img/races/artificer.jpg";
import Frog from "./img/races/frog.jpg";
import Owl from "./img/races/owl.jpg";

import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { HashLink as Link } from "react-router-hash-link";

const Home = () => {
  // const inheritanceVideo = useRef();
  const sectionCommunity = useRef();
  const [scrollOffset, setScrollOffset] = useState(0);
  const [sectionCommunityOffset, setSectionCommunityOffset] = useState();

  useEffect(() => {
    // if (inheritanceVideo.current) inheritanceVideo.current.play();
    const setOffset = () => {
      setScrollOffset(window.pageYOffset);
      setSectionCommunityOffset(sectionCommunity?.current?.offsetTop);
    };
    window.addEventListener("scroll", setOffset);
    return function cleanupListener() {
      window.removeEventListener("scroll", setOffset);
    };
  }, []);

  const heroBgX = scrollOffset / 25 + 50;
  const heroBgY = scrollOffset / 25 + 50;
  const heroFgX = scrollOffset / 50 + 50;
  const heroFgY = scrollOffset / 50 + 50;
  // const percentCommunity = window.innerHeight/(sectionCommunityOffset-scrollOffset);
  const communityBgX = (sectionCommunityOffset - scrollOffset) / 25 + 50;
  const communityBgY = (sectionCommunityOffset - scrollOffset) / 25 + 30;
  const bgPosition = (x, y) => {
    return { backgroundPosition: `${x}% ${y}%` };
  };

  return (
    <>
      {/* <div className="modal-bg">
        <div className="modal-fg">
          <h3>Title</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac vestibulum erat. Vivamus molestie turpis sem, eu placerat metus placerat ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas pretium diam ac ex rutrum venenatis. Nunc ex enim, sollicitudin quis libero vel, varius bibendum dui. Etiam vulputate nunc sit amet auctor pellentesque. Fusce at varius sapien, vel hendrerit felis. Integer iaculis turpis ac rhoncus tincidunt. Vestibulum euismod elit ut diam condimentum ultricies. Donec non tristique erat, eget vestibulum velit.</p>
          <a className="button">Got it</a>
        </div>
      </div> */}

      <div className="section--hero" style={bgPosition(heroBgX, heroBgY)}>
        <div className="foreground" style={bgPosition(heroFgX, heroFgY)}></div>
        <img src={Crest1} alt="family crest" />
        <p>
          <span className="logo">Lineage</span> is an experiment in interactive
          and collaborative world-building using NFTs
        </p>
      </div>

      <div className="section section--about" id="about">
        <div className="content">
          <div className="container-fluid">
            <div className="row margin-bottom-6">
              <div className="col-md-12">
                <h2>Own your family, write your history</h2>
                <p>
                  Decisions you make in Lineage will affect the history of your
                  family forever and will appear as changes on your crest.
                </p>
                <br />
                <img src={DecisionsDiagram} />
              </div>
            </div>
            <div className="row equal margin-bottom-6">
              <div className="col-md-12">
                <h2>300 years, 6 generations</h2>
              </div>
              <div className="col-md-8">
                <img src={TreeDiagram} />
              </div>
              <div className="col-md-4 v-center-children">
                <div className="card">
                  <p>
                    Lineage Crests (your NFT) are connected to one another via
                    Lineages. Your Lineage is all the families you descended
                    from; all of your ancestors and families from you.
                  </p>
                  <p>
                    It's been 300 years since the first of the new sentients
                    arose. As the human race hung on by a thread, new beasts of
                    consciousness rose from the puddles, the clay deposits, and
                    fruit trees of the world.
                  </p>
                </div>
              </div>
            </div>
            <div className="row equal">
              <div className="col-md-12">
                <h2>Many decisions, one world</h2>
              </div>
              <div className="col-md-8">
                <img src={InheritanceDiagram} />
              </div>
              <div className="col-md-4 v-center-children">
                <div className="card">
                  <p>
                    At each Moment in Time, your decision has the chance to
                    ripple down and affect your descendants.
                  </p>
                  <p>
                    Just like you, your decision may add new lore and art to
                    your descendants, and you may receive new lore and art from
                    your ancestors.
                  </p>
                </div>
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
                <h2 className="text--center">Lineage Roadmap</h2>
                <p>
                  CRESTS represent your heritage, the role in history that you
                  and your family play. Lineage is a project where we uncover
                  300 years of lore for 8 races across all of Kharth. Lore can
                  be discovered, shaped, or told.
                </p>
              </div>
            </div>
            {/* <img src={MoonMonkeyCathedral} alt=""/> */}

            <div className="row equal">
              <div className="col-md-6">
                <div className="card-wrapper">
                  <div className="card">
                    <div className="number">1</div>
                    <div className="content-chunk">
                      <h4>Discover Your Family</h4>
                      <p>
                        The establishment of the families of Kharth, a series of
                        4000 CRESTS spanning three hundred years and eight
                        races. Each CREST represents a family, and is the seed
                        from which stories set in the land of Kharth sprout.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-wrapper">
                  <div className="card">
                    <div className="number">2</div>
                    <div className="content-chunk">
                      <h4>Shape Your History</h4>
                      <p>
                        Moments where Kharthian families with CRESTS make
                        decisions at inflection points in their tale. A decision
                        during a Moment will be irrevocably seared into your
                        family’s history. As a Kharthian family’s history
                        changes, so will their CREST.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-wrapper">
                  <div className="card">
                    <div className="number">3</div>
                    <div className="content-chunk">
                      <h4>Find Truth In Stories</h4>
                      <p>
                        Wordspinners weave stories and Mesmers capture your
                        mind’s eye, permanently chronicling the tales of the
                        most renowned and notorious of families. Tales that
                        reach the furthest corners of Kharth become EPICS,
                        transforming from rumor or story to accepted truth.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-wrapper">
                  <div className="card">
                    <div className="number">5</div>
                    <div className="content-chunk">
                      <h4>Expand Kharthian Borders</h4>
                      <p>
                        Pursuit of the unknown. Few have traveled the Osmerian
                        seas, and fewer still have investigated the ancient
                        murals buried beneath the Cinderkeep Ruins. Who are the
                        individuals that comprise each family? How do the EPICS
                        spread around Kharth affect truth, and Kharthian
                        societies? There’s still much to do.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 bg-moon-monkey"></div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="divider">
        <div className="content">
          <hr />
        </div>
      </div> */}

      {/* <div className="section section--races" id="races">
        <div className="content">
			    <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12 margin-bottom-2">
                <h2>8 Races, 4,000 Unique Crests</h2>
                <p>The Lineage Universe is home to many races that use crests to identify themselves in trade and war. Your crest will be a descendant to one of these 8 genesis families.</p>
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
      </div> */}

      <div className="section" id="team">
        <div className="content">
          <div className="container-fluid">
            <div className="row margin-bottom-6">
              <div className="col-sm-6">
                <h2>The Fellowship</h2>
              </div>
              <div className="col-sm-6">
                <p>
                  We're not afraid to dox ourselves &#8212; our founders are
                  committed to seeing the Lineage world come to life and become
                  a one-of-a-kind NFT experience.
                </p>
              </div>

              <div className="col-sm-4">
                <div className="profile-card">
                  <img src={LucasPortrait} alt="Lucas" />
                  <div className="content-chunk">
                    <h4>
                      Lucas
                      <br />
                      <span className="title">SOL Alchemist</span>
                    </h4>
                    <p>
                      7+ years of software development experience. Formerly @
                      Apple. Fantasy nerd since age 4.
                    </p>
                    <div className="socials">
                      <a
                        className="link--social"
                        target="_blank"
                        href="https://www.linkedin.com/in/lucasdellabella/"
                      >
                        <FaLinkedin />
                      </a>
                      <a
                        className="link--social"
                        target="_blank"
                        href="https://twitter.com/heylucas_eth"
                      >
                        <FaTwitter />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="profile-card">
                  <img src={SaqifPortrait} alt="Saqif" />
                  <div className="content-chunk">
                    <h4>
                      Saqif
                      <br />
                      <span className="title">Web Artificer</span>
                    </h4>
                    <p>
                      7+ years of web development experience. Formerly @ Yelp.
                      Fan of the Sugandese Universe.
                    </p>
                    <div className="socials">
                      <a
                        className="link--social"
                        target="_blank"
                        href="https://www.linkedin.com/in/saqif/"
                      >
                        <FaLinkedin />
                      </a>
                      <a
                        className="link--social"
                        target="_blank"
                        href="https://twitter.com/FungMeButt"
                      >
                        <FaTwitter />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="profile-card">
                  <img src={MichaelPortrait} alt="Michael" />
                  <div className="content-chunk">
                    <h4>
                      Michael
                      <br />
                      <span className="title">Lore Wizard</span>
                    </h4>
                    <p>
                      2,000+ hours of GM experience. Die hard critter and
                      Dwarven Forge addict. Formerly @ GAP Inc.
                    </p>
                    <div className="socials">
                      <a
                        className="link--social"
                        target="_blank"
                        href="https://www.linkedin.com/in/michaelgguo/"
                      >
                        <FaLinkedin />
                      </a>
                      {/* <a className="link--social" target="_blank" href="#"><FaTwitter /></a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <h3>Other Party Members</h3>
                <p>
                  The founders and creatives are just a small part of what makes
                  the Lineage world turn.{" "}
                  <Link className="colored" target="_blank">
                    Join the discord
                  </Link>{" "}
                  to meet the other amazing members of our team and help shape
                  Lineage to become the universe you envision.
                </p>
              </div>
            </div>
            <div className="row">
              {/* Ahtan */}
              <div className="col-md-4 col-sm-6">
                <div className="profile-card-small">
                  <div className="content-chunk">
                    <a
                      target="_blank"
                      href="https://www.instagram.com/ahtan_delmundo/"
                    >
                      <h4>
                        @ahtan_delmundo
                        <br />
                        <span className="title">Crest Artist</span>
                      </h4>
                    </a>
                  </div>
                </div>
              </div>

              {/* Concept Artist 1 */}
              <div className="col-md-4 col-sm-6">
                <div className="profile-card-small">
                  <div className="content-chunk">
                    <a
                      target="_blank"
                      href="https://www.instagram.com/v__i__q/"
                    >
                      <h4>
                        @v__i__q
                        <br />
                        <span className="title">Concept Artist</span>
                      </h4>
                    </a>
                  </div>
                </div>
              </div>

              {/* CB */}
              <div className="col-md-4 col-sm-6">
                <div className="profile-card-small">
                  <div className="content-chunk">
                    <a
                      target="_blank"
                      href="https://www.instagram.com/chahatbavanya"
                    >
                      <h4>
                        @chahatbavanya
                        <br />
                        <span className="title">Lore Artist</span>
                      </h4>
                    </a>
                  </div>
                </div>
              </div>

              {/* Yoman */}
              <div className="col-md-4 col-sm-6">
                <div className="profile-card-small">
                  <div className="content-chunk">
                    <a target="_blank" href="https://twitter.com/yoman301">
                      <h4>
                        @yoman301
                        <br />
                        <span className="title">World Builder</span>
                      </h4>
                    </a>
                  </div>
                </div>
              </div>

              {/* Sambino */}
              <div className="col-md-4 col-sm-6">
                <div className="profile-card-small">
                  <div className="content-chunk">
                    <a target="_blank" href="https://twitter.com/sambino">
                      <h4>
                        @sambino
                        <br />
                        <span className="title">Community Manager</span>
                      </h4>
                    </a>
                  </div>
                </div>
              </div>

              {/* Community Manager */}
              <div className="col-md-4 col-sm-6">
                <div className="profile-card-small">
                  <div className="content-chunk">
                    <a target="_blank" href="https://twitter.com/nftyktty">
                      <h4>
                        @nftyktty
                        <br />
                        <span className="title">Community Manager</span>
                      </h4>
                    </a>
                  </div>
                </div>
              </div>

              {/* Dusty */}
              <div className="col-md-4 col-sm-6">
                <div className="profile-card-small">
                  <div className="content-chunk">
                    <a href="">
                      <h4>
                        @dustysky
                        <br />
                        <span className="title">Growth Engineer</span>
                      </h4>
                    </a>
                  </div>
                </div>
              </div>

              {/* FY */}
              <div className="col-md-4 col-sm-6">
                <div className="profile-card-small">
                  <div className="content-chunk">
                    <a href="">
                      <h4>
                        @FY
                        <br />
                        <span className="title">Growth Engineer</span>
                      </h4>
                    </a>
                  </div>
                </div>
              </div>

              {/* Prince */}
              <div className="col-md-4 col-sm-6">
                <div className="profile-card-small">
                  <div className="content-chunk">
                    <a href="">
                      <h4>
                        @prince
                        <br />
                        <span className="title">Growth Engineer</span>
                      </h4>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="section section--community"
        style={bgPosition(communityBgX, communityBgY)}
        ref={sectionCommunity}
      >
        <div className="content">
          <div className="container-fluid">
            <div className="col-sm-6">
              <br />
              <br />
              <h2>Join the Community</h2>
              <p>
                The story has already begun. Suit up for adventure by joining
                our discord and preparing for mint. Your crest and legacy await
                you.
              </p>
              <a className="button" target="_blank">
                Join the Discord
              </a>
              <br />
              <br />
            </div>
            <div className="col-sm-6">
              <img src={Crest2} alt="family crest" className="crest" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
