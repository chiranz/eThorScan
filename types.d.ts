import { BigNumber } from "ethers";
import { providers } from "ethers";

type Provider = providers.Web3Provider | providers.JsonRpcProvider;
interface GlobalContextType {
  blocks: FormattedBlock[];
  provider: Provider;
  loading: boolean;
}

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
