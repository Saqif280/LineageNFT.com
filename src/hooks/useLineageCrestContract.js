/**
 * Just a heads up, this entire file needs a lot of work. Its not really a good abstraction,
 * we're expecting files to exist where we shouldn't really, we're not updating the signer
 * even if the user changes wallets, etc.
 */

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
  let contract;
  try {
    contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");
  } catch (e) {
    console.error(
      "Lucas symlinked the lineage contract repo's deployment artifacts into this " +
        "repo for testing. If you're seeing this it's because you need to " +
        "`ln -s ~/path/to/contract/repo/artifacts/ artifacts`",
      e
    );
    throw e;
  }

  // Ethers setup
  const provider = new ethers.providers.JsonRpcProvider();
  const signer = provider.getSigner();
  const nftContract = new ethers.Contract(
    LATEST_CONTRACT_ADDRESS,
    contract.abi,
    provider
  );

  // Set the default signer for all functions that write to the network
  const nftContractWithSigner = nftContract.connect(signer);
  return [nftContractWithSigner];
};

export default useLineageCrestContract;
