import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import Crest from './img/crests/crest_backplate.png';
import { ethers } from "ethers";
import CONTRACT from './contract.json';

const Mint = () => {
  const [mintedCount, setMintedCount] = useState('?');
  const [statusText, setStatusText] = useState();
  const [waitingForMintSignature, setWaitingForMintSignature] = useState(false);
  const CONTRACT_ADDRESS = '0xBBedB508F864f828155389BA8a9d13ACFE65C29f';

  // let account;
  let contract;

  useEffect(async () => {
    // A Web3Provider wraps a standard Web3 provider, which is
    // what MetaMask injects as window.ethereum into each page
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // MetaMask requires requesting permission to connect users accounts
    await provider.send("eth_requestAccounts", []);

    // The MetaMask plugin also allows signing transactions to
    // send ether and pay to change state within the blockchain.
    // For this, you need the account signer...
    const signer = provider.getSigner();
    contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      CONTRACT.abi,
      signer
    );

    // get the contract minted count to populate the UI
    updateMintCount();
  });

  const updateMintCount = async () => {
    try {
      setMintedCount((await contract.totalSupply()).toNumber());
    } catch (error) {
      console.error('Having some issue calling the contract - ',error);
    }
  }

  const handleFulfilledMint = () => {
    setStatusText('Mint transaction successfully signed!');
    setWaitingForMintSignature(false);
  }

  const handleRejectedMint = () => {
    setStatusText('Mint transaction signing failed');
    setWaitingForMintSignature(false);
  }

  const handleClick = () => {
    try {
      setWaitingForMintSignature(true);
      const mintPromise = contract.mintNFT(1)
        .then(handleFulfilledMint, handleRejectedMint);
    } catch (error) {
      console.error('Having some issue calling the contract - ',error);
    }
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
              {waitingForMintSignature ?
                (
                  <button className="button" onClick={handleClick} disabled>Waiting for signature ...</button>
                ) :
                (
                  <button className="button" onClick={handleClick}>Mint</button>
                )
              }
              <p><i>{statusText}</i></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mint;
