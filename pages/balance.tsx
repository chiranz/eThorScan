import { ethers } from "ethers";
import React, { ReactElement } from "react";
import NextLink from "../components/NextLink";
import SearchField from "../components/SearchField";
import { GlobalContext } from "../context/GlobalContext";
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
    try {
      const _bal = await provider.getBalance(address);
      // const _txnCount = await provider.getTransactionCount(address)
      setWallet({ address, balance: ethers.utils.formatEther(_bal) });
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };
  return (
    <div className="mt-10">
      <SearchField
        actionText="Search"
        handleSearch={handleSearch}
        placeHolder="enter address"
        loading={loading}
      />
      <div className="mt-10">
        {wallet ? (
          <h1>
            Balance for address{" "}
            <NextLink href={`/address/${wallet.address}`}>
              {wallet.address}
            </NextLink>{" "}
            is {parseFloat(wallet.balance).toFixed(4)} Eth
          </h1>
        ) : (
          <h1>Please enter the address you want to query.</h1>
        )}
      </div>
    </div>
  );
}
