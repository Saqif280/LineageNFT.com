import React from 'react';
import classNames from 'classnames';
import FrogFamily from './img/scenes/frog_family.png';

const Roadmap = () => {
  return (
    <div className="section section--roadmap" id="roadmap">
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-offset-6 col-md-6">
              <h2>Lineage Roadmap</h2>
            </div>
            <div className="col-md-6">
              <img src={FrogFamily} />
            </div>
            <div className="col-md-6">
              <p>We have a strong foundational belief that roadmaps <b>should not</b> be set in stone before the community is grown. That being said, CRESTs are designed to expose their data for those that want to create on top. We're builders at heart and so we're super excited to build more for the community.</p>
              <p>Some ideas we'd like to explore in 2022:
                <ul>
                  <li>Ship our <b>Ancestry Explorer</b> tool so CREST-holders can easily discover their lineage and what their CREST lore means</li>
                  <li>Spin up a <b>Lineage Merch Store</b>, <b>Twitter Banner Creator</b>, and other fun things for the community</li>
                  <li>Launch an 8000 piece <b>PFP project</b>, 50% of the collection reserved for OG crest holders</li>
                </ul>
              </p>
              <p>Other ideas on our list:
                <ul>
                  <li>Have stories and <b>lore professionally written and narrated</b> for the community, and run auctions where 100% of funds go to charity and back to the community</li>
                  {/* <li>Create a <b>Lineage D&D campaign guide</b> set in the world of Kharth</li> */}
                  <li>Design a <b>Lineage DAO</b> that allows the community to contribute and canonize lore on chain to grow the intellectual property</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
