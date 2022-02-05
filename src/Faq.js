import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import MoonMonkeyCathedral from './img/scenes/moon_monkey_cathedral.png';

const Faq = () => {
  const bgPicture = useRef();
  const [scrollOffset, setScrollOffset] = useState(0);
  const [bgPictureOffset, setBgPictureOffset] = useState();

  useEffect(() => {
    const setOffset = () => {
      setScrollOffset(window.pageYOffset);
      setBgPictureOffset(bgPicture?.current?.offsetTop);
    }
    window.addEventListener('scroll', setOffset);
    return function cleanupListener() {
      window.removeEventListener('scroll', setOffset);
    }
  }, []);
  
  const bgPictureX = (bgPictureOffset-scrollOffset)/300 + 50;
  const bgPictureY = (bgPictureOffset-scrollOffset)/300 + 50;
  const bgPosition = (x, y) => {
    return { 'backgroundPosition': `${x}% ${y}%` };
  }

  return (
    <div className="section section--faq" id="faq">
      <div className="content">
        <div className="container-fluid">
          <div className="row margin-bottom-6">
            <div className="col-md-offset-0 col-md-12">
              <h2 className="text--center">Lineage FAQ</h2>
            </div>
          </div>

          <div className="row equal">
          
            <div className="col-md-8">
              <div className="card-wrapper">
                <div className="card">
                  <div className="number">1</div>
                  <div className="content-chunk">
                    <h4>What is Lineage?</h4>
                    <p>Lineage is an interconnected NFT collection built on top of a <a target="_blank" href="https://twitter.com/search?q=%22Encyclopedia%20entry%22%20(from%3ALineageNFT)%20-filter%3Areplies&src=typed_query" className="colored">vast world</a>. When you mint your family CREST, you'll be able to discover your ancestor's and descendants (other NFT holders) and uncover together what lore sets you apart from one another. </p>
                  </div>
                </div>
              </div>
              
              <div className="card-wrapper">
                <div className="card">
                  <div className="number">2</div>
                  <div className="content-chunk">
                    <h4>Why join Lineage?</h4>
                    <p>Lineage is a community for D&D players, world builders, and anyone who loves fantasy. You'll love it here if you're a nerd like us. <a href="https://discord.gg/FbxxaqVVCU" target="_blank" className="colored">Join the community</a> to connect with your family line, discover your lore, or contribute art to the worldbuilding.</p>
                  </div>
                </div>
              </div>

              <div className="card-wrapper">
                <div className="card">
                  <div className="number">3</div>
                  <div className="content-chunk">
                    <h4>What do I get when I mint a Lineage NFT?</h4>
                    <p>To join the community, you mint a CREST that represents a family in the world of Kharth. Upon mint, we create generative lore that is unique to your family and based on your ancestry. Your mint will place you in one of eight races, and in one of countless family lines. Through our <a className="colored">Ancestry Explorer</a>, you'll be able to uncover your ancestor and descendent CRESTs and connect with the NFT holders that make up your bloodline.</p>
                  </div>
                </div>
              </div>

              <div className="card-wrapper">
                <div className="card">
                  <div className="number">4</div>
                  <div className="content-chunk">
                    <h4>What is the inherent value of a CREST?</h4>
                    <p>Ultimately, it’s a creative project, and it’s worth whatever you deem it to be worth. But:
                    <ul>
                      <li>CRESTs are the first project where the tokens have relationships between each other</li>
                      <li>Each CREST has its own generative backstory</li>
                      <li>The art looks amazing, depicts your family's backstory, and ties into our world building</li>
                    </ul>
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-wrapper">
                <div className="card">
                  <div className="number">5</div>
                  <div className="content-chunk">
                    <h4>Wen mint?</h4>
                    <p>We're minting 4000 CRESTs in March. The mint price is X ETH to keep the community as accessible as possible.</p>
                    <p>We're builders not marketers. We're not advertising on tiktok, we're not doing tons of giveaways and promotions. We'd rather just ask for less ETH and make it easy for anyone to get involved.</p>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-md-4 bg-moon-monkey" style={ bgPosition(bgPictureX, bgPictureY) } ref={bgPicture}>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
