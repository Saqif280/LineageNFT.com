import React, { useState } from 'react';
import classNames from 'classnames';
import Placeholder from './img/placeholder-square.jpeg';
import PlaceholderWide from './img/placeholder-wide.jpeg';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

const Home = () => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const MIN_PAGE = 1;
  const MAX_PAGE = 3;

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
        <h1>Lineage</h1>
        <p>Own a generation, influence a world</p>
      </div>

      <div className="section" id="about">
        <div className="content">
			    <div className="container-fluid">
            <div className="col-sm-6">
              <h2>10 Family Lines,<br/>10,000 Family Crests</h2>
              <p>In Lineage, your NFT is your family crest, representing one generation, of one branch, of a renowned family. It's a grand experiment where you, the community, tells the story and your decisions affect others. Where token holders opt in to events in the world that will change their fate, and that of their descendants, forever.</p>
            </div>
            <div className="col-sm-6">
              <img src={Placeholder} alt="family crest 1" className="crest"/>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="slider">
          <div className="slider-row"></div>
        </div>
      </div>

      <div className="section section--roadmap" id="roadmap">
        <div className="content">
			    <div className="container-fluid">
            <div className="col-sm-offset-3 col-sm-6">
              <h2 className="text--center">The Road Ahead</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas condimentum neque in nunc scelerisque, non lacinia libero dapibus. Integer at consequat magna, nec ultrices diam. Etiam nec nunc magna. Quisque ut diam egestas, viverra nulla pellentesque, gravida ipsum.</p>
            </div>
          </div>
          <div className="card-navigation">
            <a onClick={turnPageLeft} className={classNames({ 'disabled': currentPageNumber === 1 })}>
              <MdKeyboardArrowLeft />
            </a>
            <a onClick={turnPageRight} className={classNames({ 'disabled': currentPageNumber === 3 })}>
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
              <p>We begin by discovering the skeleton of a world and its histories during the minting process. Read about it here.</p>
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
              <p>We let you tell the story over the course of 6? 12? months; make permanent decisions, lifelong friends, and your legacy. Read more about the mechanics of the system and this project in particular here.</p>
              <p>During this time, the Lineage Team will also be working on community events, establishing merchandising and social partnerships, NFT drops that fit into our world and IP, and helping bring Lineage off the screen and into the world around us</p>
              <p>We plan to work with writers, visual artists, and storytellers of all mediums who want to become a part of our community to slowly reveal more of the world that’s been created, in the form of [cool things].</p>
            </div>

            <div 
              className={
                classNames('card', {
                  'flipped': currentPageNumber > 3,
                })
              }
            >
              <h4>Chapter 3</h4>
              <h3>Community Events</h3>
              <p>After we’ve all discovered our histories together, we create LineageDAO, a DAO that collectively owns the intellectual property our community has funded. Together we will deepen the world, work on new projects, grow the intellectual property, and work to create a fantasy world that can stand the test of time.</p>
              <p>Lineage is going to be so much more than just a bunch of family crests - both on chain, and off chain.</p>
              <p>But Lineage needs you. Not bots, not investors - you. We want lineage and its success to be owned by the players, the story tellers, and the nights with our friends where we’re laughing over some stupid story that plasters a grin on our faces. That’s what this revolution is all about.</p>
            </div>
          </div>

          <img src={PlaceholderWide} alt="illustration" className="illustration"/>
        </div>
      </div>

      <div className="section" id="team">
        <div className="content">
			    <div className="container-fluid">
            <div className="col-sm-6">
              <h2>The Fellowship</h2>
            </div>
            <div className="col-sm-6">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas condimentum neque in nunc scelerisque, non lacinia libero dapibus. Integer at consequat magna, nec ultrices diam. Etiam nec nunc magna.</p>
            </div>
            
            <div className="col-sm-4">
              <div className="profile-card">
                <img src={Placeholder} alt="Lucass"/>
                <div className="content-chunk">
                  <h4>Lucas<br /><span className="title">Eth Artificer</span></h4>
                  <div className="socials">
                    <a className="link--social" target="_blank" href="#"><FaLinkedin /></a>
                    <a className="link--social" target="_blank" href="#"><FaTwitter /></a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-sm-4">
              <div className="profile-card">
                <img src={Placeholder} alt="Saqif"/>
                <div className="content-chunk">
                  <h4>Saqif<br /><span className="title">Web Artificer</span></h4>
                  <div className="socials">
                    <a className="link--social" target="_blank" href="#"><FaLinkedin /></a>
                    <a className="link--social" target="_blank" href="#"><FaTwitter /></a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-sm-4">
              <div className="profile-card">
                <img src={Placeholder} alt="Michael"/>
                <div className="content-chunk">
                  <h4>Michael<br /><span className="title">Lore Wizard</span></h4>
                  <div className="socials">
                    <a className="link--social" target="_blank" href="#"><FaLinkedin /></a>
                    <a className="link--social" target="_blank" href="#"><FaTwitter /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
			    <div className="container-fluid">
            <div className="col-sm-12">
              <h3>Other Party Members</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas condimentum neque in nunc scelerisque, non lacinia libero dapibus.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section section--community">
        <div className="content">
			    <div className="container-fluid">
            <div className="col-sm-6">
              <h2>Join the Community</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas condimentum neque in nunc scelerisque, non lacinia libero dapibus. Integer at consequat magna, nec ultrices diam. Etiam nec nunc magna.</p>
              <a className="button" href="https://discord.gg/EVhzumCtMd" target="_blank">Join the Discord</a>
              <br/>
              <br/>
            </div>
            <div className="col-sm-6">
              <img src={Placeholder} alt="family crest 2" className="crest"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
