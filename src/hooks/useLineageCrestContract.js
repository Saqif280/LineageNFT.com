/**
 * Just a heads up, this entire file needs a lot of work. Its not really a good abstraction,
 * we're expecting files to exist where we shouldn't really, we're not updating the signer
 * even if the user changes wallets, etc.
 */

import detectEthereumProvider from "@metamask/detect-provider";
import { useEffect, useState, useCallback } from "react";
const ethers = require("ethers");

const API_URL = process.env.API_URL;
let PUBLIC_KEY;
let PRIVATE_KEY;

if (API_URL.includes("localhost")) {
  PUBLIC_KEY = process.env.LOCALHOST_PUBLIC_KEY;
  PRIVATE_KEY = process.env.LOCALHOST_PRIVATE_KEY;
} else {
  PUBLIC_KEY = process.env.PUBLIC_KEY;
  PRIVATE_KEY = process.env.PRIVATE_KEY;
}

const LATEST_CONTRACT_ADDRESS = process.env.LATEST_CONTRACT_ADDRESS;

const useLineageCrestContract = () => {
  // Improve hook so that it updates the connected signer for the contract when the signer changes
  const [{ contract, signedContract }, setContracts] = useState({
    contract: null,
    signedContract: null,
  });
  const [signer, setSigner] = useState();
  let contractArtifact;
  try {
    contractArtifact = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");
  } catch (e) {
    console.error(
      "Lucas symlinked the lineage contract repo's deployment artifacts into this " +
        "repo for testing. If you're seeing this it's because you need to " +
        "`ln -s ~/path/to/contract/repo/artifacts/ artifacts`",
      e
    );
    throw e;
  }

  useEffect(() => {
    const createProvider = async () => {
      // this returns the provider, or null if it wasn't detected
      const browserProvider = await detectEthereumProvider();
      if (!browserProvider) {
        console.log("Please install MetaMask!");
      } else {
        if (browserProvider !== window.ethereum) {
          console.error("Do you have multiple wallets installed?");
          return;
        }

        // TODO: I think I'm forcing a connection of a wallet potentially before its necessary!
        await browserProvider.enable();
        const provider = new ethers.providers.Web3Provider(
          browserProvider,
          "any"
        );
        const signer = provider.getSigner();
        const nftContract = new ethers.Contract(
          LATEST_CONTRACT_ADDRESS,
          contractArtifact.abi,
          provider
        );

        // Set the default signer for all functions that write to the network
        const nftContractWithSigner = nftContract.connect(signer);
        setSigner(signer);
        setContracts({
          contract: nftContract,
          signedContract: nftContractWithSigner,
        });
      }
    };

    createProvider();
  }, []);

  const isLoading = !signedContract;

  return [signedContract, signer, isLoading];
};

export default useLineageCrestContract;
