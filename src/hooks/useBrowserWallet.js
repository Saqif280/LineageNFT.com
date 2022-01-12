import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const useBrowserWallet = () => {
  const [accounts, setAccounts] = useState([]);
  // Note that this event is emitted on page load.
  // If the array of accounts is non-empty, you're already
  // connected.
  useEffect(() => {
    window.ethereum.on("accountsChanged", handleAccountsChanged);
  }, []);

  // For now, 'eth_accounts' will continue to always return an array
  function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
      // MetaMask is locked or the user has not connected any accounts
      console.log("Please connect to MetaMask.");
    }

    setAccounts(accounts);
  }

  return accounts;
};

export default useBrowserWallet;
