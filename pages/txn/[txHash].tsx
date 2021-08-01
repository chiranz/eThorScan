import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { ethers } from "ethers";
import { NextRouter, useRouter } from "next/router";
import React, { ReactElement } from "react";
import MapField from "../../components/MapField";
import NextLink from "../../components/NextLink";
import useBlock from "../../hooks/useBlock";
import useTransaction from "../../hooks/useTransaction";
import { joinClasses } from "../../utils";

dayjs.extend(relativeTime);

interface Props {}

interface RouterProps extends NextRouter {
  query: {
    txHash?: string;
  };
}

export default function TxnPage({}: Props): ReactElement {
  const router = useRouter();
  const {
    query: { txHash },
  }: RouterProps = router;
  const { loading, txn } = useTransaction(txHash);
  if (loading) return <div>Loading...</div>;

  return (
    <div className={joinClasses("my-4", "flex", "flex-col")}>
      <h1 className="text-3xl">Txn Details: {txHash.slice(0, 10)}...</h1>
      <div className="inline-flex items-center mt-4">
        <h3 className="text-lg font-medium capitalize">Chain id: </h3>{" "}
        <span className="ml-4">{txn.chainId}</span>
      </div>
      <div className="inline-flex items-center mt-4">
        <h3 className="text-lg font-medium capitalize">block number: </h3>{" "}
        <span className="ml-4">
          <NextLink href={`/block/${txn.blockNumber}`}>
            {txn.blockNumber}
          </NextLink>
        </span>
      </div>
      <MapField descText="confirmations" value={txn.confirmations} />
      <MapField
        descText="value"
        value={`${ethers.utils.formatEther(txn.value)} ETH`}
      />
      <MapField descText="from" value={txn.from} />
      <MapField descText="to" value={txn.to} />
      <MapField
        descText="gas limit"
        value={`${txn.gasLimit.toString()} Gwei`}
      />
      <MapField descText="gas price" value={`${txn.gasPrice.toString()} Wei`} />
      <MapField descText="data" value={`${txn.data.slice(0, 40)}....`} />
      <MapField descText="r" value={txn.r} />
      <MapField descText="s" value={txn.s} />
      <MapField descText="v" value={txn.v} />
    </div>
  );
}
interface BlockProps {
  query: {
    txHash: string;
  };
}

TxnPage.getInitialProps = (props: BlockProps) => {
  const { txHash } = props.query;
  return { txHash };
};
