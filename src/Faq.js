import React from 'react';
import classNames from 'classnames';
import MoonMonkeyCathedral from './img/scenes/moon_monkey_cathedral.png';

const Faq = () => {
  return (
    <div className="section section--roadmap" id="faq">
      <div className="content">
        <div className="container-fluid">
          <div className="row margin-bottom-6">
            <div className="col-md-offset-0 col-md-12">
              <h2 className="text--center">Lineage FAQ</h2>
            </div>
          </div>

          <div className="row equal">
          
            <div className="col-md-6">
              <div className="card-wrapper">
                <div className="card">
                  <div className="number">1</div>
                  <div className="content-chunk">
                    <h4>What is Lineage?</h4>
                    <p>Lineage is an interconnected NFT collection built on top of a <a href="/#" className="colored">vast world</a>. When you mint your family crest, you'll be able to discover your ancestor's and descendants (other NFT holders) and uncover together what lore sets you apart from one another. </p>
                  </div>
                </div>
              </div>
              
              <div className="card-wrapper">
                <div className="card">
                  <div className="number">2</div>
                  <div className="content-chunk">
                    <h4>Why join Lineage?</h4>
                    <p>Lineage is a community for D&D players, world builders, and anyone who loves fantasy. You'll love it here if you're a nerd like us. <a href="https://discord.gg/FbxxaqVVCU" className="colored" target="_blank">Join the community</a> to connect with your family line, discover your lore, or contribute art to the worldbuilding.</p>
                  </div>
                </div>
              </div>

              <div className="card-wrapper">
                <div className="card">
                  <div className="number">3</div>
                  <div className="content-chunk">
                    <h4>What do I get when I mint a Lineage NFT?</h4>
                    <p>To join the community, you mint a CREST that represents a family in the world of Kharth. Upon mint, we create generative lore that is unique to your family and based on your ancestry. Your mint will place you in one of eight races, and in one of countless family lines. Through our <a href="/#" className="colored">Ancestry Explorer</a>, you'll be able to uncover your ancestor and descendent crests and connect with the NFT holders that make up your bloodline.</p>
                  </div>
                </div>
              </div>

              <div className="card-wrapper">
                <div className="card">
                  <div className="number">4</div>
                  <div className="content-chunk">
                    <h4>What is the inherent value of a CREST?</h4>
                    <p>
                    <ul>
                      <li>CRESTs are the first NFT project where the tokens have relationships between each other</li>
                      <li>Each CREST has its own generative backstory</li>
                      <li>The art looks amazing, depicts your family's backstory, and ties into our world building</li>
                    </ul>
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-wrapper">
                <div className="card">
                  <div className="number">4</div>
                  <div className="content-chunk">
                    <h4>Wen mint?</h4>
                    <p>We're minting 4000 CRESTs in march. The mint price is .02 eth to keep the community as accessible as possible.</p>
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

export default Faq;
