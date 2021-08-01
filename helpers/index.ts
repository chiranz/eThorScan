import { utils, BigNumber } from "ethers";
interface RawBlock {
  hash: string;
  parentHash: string;
  number: number;
  timestamp: number;
  nonce: string;
  difficulty: number;
  gasLimit: {
    type: string;
    hex: string;
  };
  gasUsed: BigNumber;
  miner: string;
  extraData: string;
  transactions: string[];
}

interface FormattedBlock {
  height: number;
  transactionCount: number;
  miner: string;
  gasUsed: string;
  timestamp: number;
}

export const getFormattedBlock = ({
  number,
  timestamp,
  gasUsed,
  miner,
  transactions,
}: RawBlock): FormattedBlock => {
  const height = number;
  const transactionCount = transactions.length;
  const _gasUsed = utils.formatEther(gasUsed);

  return {
    timestamp,
    height,
    transactionCount,
    miner,
    gasUsed: _gasUsed,
  };
};
