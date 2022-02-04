import React from 'react';
import classNames from 'classnames';
import LucasPortrait from './img/portraits/lucas-cropped.png';
import SaqifPortrait from './img/portraits/saqif-cropped.png';
import MichaelPortrait from './img/portraits/michael-cropped.png';
import Ahtan from './img/portraits/ahtan.jpg';
import AhtanHighlights from './img/crest_artist_highlights.png';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';

const Team = () => {
  return (
    <div className="section" id="team">
      <div className="content">
        <div className="container-fluid">
          <div className="row margin-bottom-2">
            <div className="col-sm-12">
              <h2>Our Fellowship</h2>
              <p>A huge thank you to everyone making Lineage a reality. <a href="https://discord.gg/FbxxaqVVCU" target="_blank" className="colored">Join the discord</a> to meet the amazing members of our team.</p>
            </div>
          </div>
          <div className="row margin-bottom-6">
            <div className="col-sm-12">
              <h3>The founding folk</h3>
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
                    <a className="link--social" target="_blank" href="https://twitter.com/FungeMeButt"><FaTwitter /></a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-sm-4">
              <div className="profile-card">
                <img src={MichaelPortrait} alt="Michael"/>
                <div className="content-chunk">
                  <h4>Michael<br /><span className="title">Lore Wizard</span></h4>
                  <p>2000+ hours of GM experience. Die hard critter and Dwarven Forge addict. Formerly @ GAP Inc.</p>
                  <div className="socials">
                    <a className="link--social" target="_blank" href="https://www.linkedin.com/in/michaelgguo/"><FaLinkedin /></a>
                    {/* <a className="link--social" target="_blank" href="#"><FaTwitter /></a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row margin-bottom-2">
            <div className="col-sm-12">
              <h3>Craftsman of the crests</h3>
            </div>

            {/* Ahtan */}
            <div className="col-md-3">
              <div className="profile-card-small">
                <img src={Ahtan} alt="Ahtan"/>
                <div className="content-chunk">
                  <a target="_blank" href="https://www.instagram.com/ahtan_delmundo/">
                    <h4>@ahtan_delmundo<br /><span className="title">Crest Artisan</span></h4>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-9">
              <br />
              <img src={AhtanHighlights} />
            </div>

          </div>
          <div className="row">
            <div className="col-sm-12">
              <h3>The Lineage coalition</h3>
            </div>
          </div>
          <div className="row">

            {/* Art Coordinator */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="profile-card-small">
                <div className="content-chunk">
                  <a target="_blank" href="https://www.instagram.com/samkimball__/">
                    <h4>@samkimball__<br /><span className="title">Artisan Coordinator</span></h4>
                  </a>
                </div>
              </div>
            </div>

            {/* Concept Artist 1 */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="profile-card-small">
                <div className="content-chunk">
                  <a target="_blank" href="https://www.instagram.com/viq_with_a_pen/">
                    <h4>@viq<br /><span className="title">Concept Artisan</span></h4>
                  </a>
                </div>
              </div>
            </div>

            {/* Yoman */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="profile-card-small">
                <div className="content-chunk">
                  <a target="_blank" href="https://twitter.com/yoman301">
                    <h4>@yoman301<br /><span className="title">Loresmith</span></h4>
                  </a>
                </div>
              </div>
            </div>

            {/* Sambino */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="profile-card-small">
                <div className="content-chunk">
                  <a target="_blank" href="https://twitter.com/sambino">
                    <h4>@sambino<br /><span className="title">Community Oracle</span></h4>
                  </a>
                </div>
              </div>
            </div>

            {/* Community Manager */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="profile-card-small">
                <div className="content-chunk">
                  <a target="_blank" href="https://twitter.com/nftyktty">
                    <h4>@nftyktty<br /><span className="title">Community Oracle</span></h4>
                  </a>
                </div>
              </div>
            </div>

            {/* Prince */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="profile-card-small">
                <div className="content-chunk">
                  <a href="">
                    <h4>@prince<br /><span className="title">Growth Artificer</span></h4>
                  </a>
                </div>
              </div>
            </div>

            {/* Nate */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="profile-card-small">
                <div className="content-chunk">
                  <a href="">
                    <h4>@geko<br /><span className="title">Growth Artificer</span></h4>
                  </a>
                </div>
              </div>
            </div>

            {/* Dusty */}
            {/* <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="profile-card-small">
                <div className="content-chunk">
                  <a href="">
                    <h4>@dustysky<br /><span className="title">Growth Engineer</span></h4>
                  </a>
                </div>
              </div>
            </div> */}

            {/* FY */}
            {/* <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="profile-card-small">
                <div className="content-chunk">
                  <a href="">
                    <h4>@FY<br /><span className="title">Growth Engineer</span></h4>
                  </a>
                </div>
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
