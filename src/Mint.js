import React, { useState } from 'react';
import classNames from 'classnames';
import Crest from './img/crests/crest_backplate.png';

const Mint = () => {
  const [mintedCount, setMintedCount] = useState(0);
  const handleClick = () => {
    alert('this feature isn\'t ready yet!');
  }
  return (
    <div className="section section--mint" id="mint">
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 text--center">
              <img src={Crest} />
              <h2>Mint a Crest</h2>
              <p>Claim your Kharthian family by minting a crest below.</p>
              <p><b>{mintedCount.toString()}/4000 minted</b></p>
              <button className="button" onClick={handleClick}>mint</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mint;
