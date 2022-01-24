import React from 'react';
import classNames from 'classnames';
import MoonMonkeyCathedral from './img/scenes/moon_monkey_cathedral.png';
import { HashLink as Link } from "react-router-hash-link";

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
                    <p>Lineage is an interconnected NFT collection built on top of a <Link href="/#" className="colored">vast world</Link>. When you mint your family crest, you'll be able to discover your ancestor's and descendants (other NFT holders) and uncover together what lore sets you apart from one another. </p>
                  </div>
                </div>
              </div>
              
              <div className="card-wrapper">
                <div className="card">
                  <div className="number">2</div>
                  <div className="content-chunk">
                    <h4>Why join Lineage?</h4>
                    <p>Lineage is an NFT community for creative fun! Lineage gives you the opportunity to own a family in a fantasy world to create a unique community experience. Connect with your family line, discover your lore, or contribute art to the worldbuilding - this universe is yours to expand on.</p>
                  </div>
                </div>
              </div>
              <div className="card-wrapper">
                <div className="card">
                  <div className="number">3</div>
                  <div className="content-chunk">
                    <h4>What do I get when I mint a Lineage NFT?</h4>
                    <p>To join the community, you mint a CREST that represents a family in the world of Kharth. Upon mint, we create generative lore that is unique to your family and based on your ancestry. Your mint will place you in one of eight races, and in one of countless family lines. Through our <Link href="/#" className="colored">Ancestry Explorer</Link>, you'll be able to uncover your ancestor and descendent crests and connect with the NFT holders that make up your bloodline.</p>
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
