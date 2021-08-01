import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { ethers } from "ethers";
import { NextRouter, useRouter } from "next/router";
import React, { ReactElement } from "react";
import NextLink from "../../components/NextLink";
import useBlock from "../../hooks/useBlock";
import { joinClasses } from "../../utils";

dayjs.extend(relativeTime);

interface Props {}

interface RouterProps extends NextRouter {
  query: {
    blockHeight?: string;
  };
}

export default function BlockPage({}: Props): ReactElement {
  const router = useRouter();
  const {
    query: { blockHeight },
  }: RouterProps = router;
  const { loading, block } = useBlock(blockHeight);
  if (loading) return <div>Loading...</div>;

  return (
    <div className={joinClasses("my-4", "flex", "flex-col")}>
      <h1 className="text-3xl">Block Details: {blockHeight}</h1>
      <div className="inline-flex items-center mt-4">
        <h3 className="text-lg font-medium capitalize">hash: </h3>{" "}
        <span className="ml-4">{block.hash}</span>
      </div>
      <div className="inline-flex items-center mt-4">
        <h3 className="text-lg font-medium capitalize">Timestamp: </h3>{" "}
        <span className="ml-4 text-gray-500">
          {" "}
          {dayjs.unix(block.timestamp).fromNow()}
        </span>
      </div>
      <div className="inline-flex items-center mt-4">
        <h3 className="text-lg font-medium capitalize">Difficulty: </h3>{" "}
        <span className="ml-4 text-gray-500"> {block.difficulty}</span>
      </div>
      <div className="inline-flex items-center mt-4">
        <h3 className="text-lg font-medium capitalize">gas limit: </h3>{" "}
        <span className="ml-4 text-gray-500">
          {" "}
          {block.gasLimit.toString()} Wei
        </span>
      </div>
      <div className="inline-flex items-center mt-4">
        <h3 className="text-lg font-medium capitalize">gas used: </h3>{" "}
        <span className="ml-4 text-gray-500">
          {" "}
          {block.gasUsed.toString()} Wei
        </span>
      </div>
      <div className="inline-flex items-center mt-4">
        <h3 className="text-lg font-medium capitalize">miner: </h3>{" "}
        <span className="ml-4 text-gray-500"> {block.miner}</span>
      </div>
      <div className="flex mt-4">
        <h3 className="text-lg font-medium capitalize">Transactions: </h3>{" "}
        <div className="flex flex-col overflow-y-scroll max-h-48">
          {block.transactions.map((transaction) => (
            <div>
              <NextLink href={`/txn/${transaction}`}>{transaction}</NextLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
interface BlockProps {
  query: {
    blockHeight: string;
  };
}

BlockPage.getInitialProps = (props: BlockProps) => {
  const { blockHeight } = props.query;
  return { blockHeight };
};
