import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { getProvider } from "../helpers/provider";

const useEthBalance = (address: string) => {
  const [balance, setBalance] = useState("");

  useEffect(() => {
    async function getBalance() {
      const provider = await getProvider();
      const _bal = await provider.getBalance(address);
      console.log(_bal);
      setBalance(ethers.utils.formatEther(_bal));
    }
    getBalance();
  }, []);
  return balance;
};

export default useEthBalance;
