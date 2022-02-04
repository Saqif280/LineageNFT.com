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
              <p>We have a strong foundational belief that roadmaps <b>should not</b> be set in stone before the community is grown. That being said, CRESTs are designed like Loot, to expose their data for those that want to create on top. We're builders at heart and so we're super excited to build more for the community.</p>
              <p>Some ideas we're exploring;
                <ul>
                  <li>Launch an 8000 piece <b>PFP project</b>, 50% of the collection reserved for OG crest holders.</li>
                  <li>Have stories and <b>lore professionally written and narrated</b> for the community, and run auctions where 100% of funds go to charity and back to the community.</li>
                  <li>Create a <b>Lineage D&D campaign guide</b> set in the world of Kharth</li>
                  <li>Design a <b>Lineage DAO</b> that allows the community to contribute and canonize lore on chain to grow the intellectual property</li>
                  <li>Spin up a <b>Lineage Merch Store</b>, <b>Twitter Banner Creator</b>, and other fun things for the community</li>
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
