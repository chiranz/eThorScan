import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { NextRouter, useRouter } from "next/router";
import React, { ReactElement } from "react";
import MapField from "../../components/MapField";
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

      <MapField
        descText="timestamp"
        value={dayjs.unix(block.timestamp).fromNow()}
      />
      <MapField descText="difficulty" value={block.difficulty} />
      <MapField
        descText="gas limit"
        value={`${block.gasLimit.toString()} Gwei`}
      />
      <MapField
        descText="gas used"
        value={`${block.gasUsed.toString()} Gwei`}
      />
      <MapField descText="miner" value={block.miner} />
      <div className="flex mt-4">
        <h3 className="text-lg font-medium capitalize">Transactions: </h3>{" "}
        <div className="flex flex-col overflow-y-scroll max-h-48">
          {block.transactions.map((transaction) => (
            <div title="view transaction">
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
