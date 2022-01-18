import React from 'react';
import classNames from 'classnames';
import MoonMonkeyCathedral from './img/scenes/moon_monkey_cathedral.png';

const Roadmap = () => {
  return (
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
  );
}

export default Roadmap;
