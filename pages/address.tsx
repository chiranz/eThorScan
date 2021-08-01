import { ethers } from "ethers";
import React, { ReactElement } from "react";
import MapField from "../components/MapField";
import NextLink from "../components/NextLink";
import SearchField from "../components/SearchField";
import { GlobalContext } from "../context/GlobalContext";
import { GlobalContextType } from "../types";

interface Props {}
type AddressType = "Externally Owned Account" | "Contract Address";
interface WalletProps {
  balance: string;
  address: string;
  type: AddressType;
}

export default function balance({}: Props): ReactElement {
  const { provider } = React.useContext(GlobalContext) as GlobalContextType;
  const [wallet, setWallet] = React.useState<WalletProps>(null);
  const [loading, setLoading] = React.useState(false);
  const handleSearch = async (address: string) => {
    setLoading(true);
    try {
      const _bal = await provider.getBalance(address);
      const code = await provider.getCode(address);
      console.log(code);
      const type: AddressType =
        code === "0x" ? "Externally Owned Account" : "Contract Address";
      // const _txnCount = await provider.getTransactionCount(address)
      setWallet({ address, balance: ethers.utils.formatEther(_bal), type });
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };
  console.log(wallet);
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
          <div className="text-left">
            <MapField descText="address" value={wallet.address} />
            <br />
            <MapField descText="account type" value={wallet.type} />
            <br />
            <MapField descText="balance" value={`${wallet.balance} ETH`} />
          </div>
        ) : (
          <h1>Please enter the address you want to query.</h1>
        )}
      </div>
    </div>
  );
}
