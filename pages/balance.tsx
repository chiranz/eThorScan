import { ethers } from "ethers";
import React, { ReactElement } from "react";
import Button from "../components/Button";
import SearchField from "../components/SearchField";
import { GlobalContext } from "../context/GlobalContext";
import useEthBalance from "../hooks/useEthBalance";
import { GlobalContextType } from "../types";

interface Props {}
interface WalletProps {
  balance: string;
  address: string;
}

export default function balance({}: Props): ReactElement {
  const { provider } = React.useContext(GlobalContext) as GlobalContextType;
  const [wallet, setWallet] = React.useState<WalletProps>(null);
  const [loading, setLoading] = React.useState(false);
  const handleSearch = async (address: string) => {
    setLoading(true);
    const _bal = await provider.getBalance(address);
    // const _txnCount = await provider.getTransactionCount(address)
    setWallet({ address, balance: ethers.utils.formatEther(_bal) });
    setLoading(false);
  };
  return (
    <div className="mt-10">
      <SearchField
        actionText="Search"
        handleSearch={handleSearch}
        placeHolder="enter address"
      />
      <div className="mt-10">
        {wallet ? (
          <h1>Your balance is {wallet.balance} Eth</h1>
        ) : (
          <h1>Nothing to show here. Please enter address you want to query.</h1>
        )}
      </div>
    </div>
  );
}
