import React from "react";
import { getFormattedBlock } from "../helpers";
import { getProvider } from "../helpers/provider";
import { FormattedBlock, Provider, RawBlock } from "../types";

interface GlobalProviderProps {
  children: React.ReactNode;
}

export const GlobalContext = React.createContext(null);

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [blocks, setBlocks] = React.useState<FormattedBlock[]>([]);
  const [loading, setLoading] = React.useState(true);
  let lastBlockNumber = null;
  const [provider, setProvider] = React.useState(null);

  React.useEffect(() => {
    async function init() {
      const _provider = await getProvider();
      setProvider(_provider);
      const blockNumber = _provider._lastBlockNumber;
      const _blocks: FormattedBlock[] = [];
      for (let i = blockNumber; i > blockNumber - 10; i--) {
        let newBlock = (await _provider.getBlock(i)) as unknown as RawBlock;
        let formattedBlock = getFormattedBlock(newBlock) as FormattedBlock;

        _blocks.push(formattedBlock);
      }
      setBlocks(_blocks);
      setLoading(false);
    }
    init();
    if (provider) {
      lastBlockNumber = provider._lastBlockNumber;
    }
    // return () => provider.off("block", fetchBlock);
  }, []);
  const fetchBlock = async (blockNumber: number) => {
    if (blockNumber != lastBlockNumber) {
      console.log(`New Block ${blockNumber} Mined! `);
      console.log("Getting Block details");
      let newBlock = await provider.getBlock(blockNumber);
      newBlock = getFormattedBlock(newBlock);
      console.log(newBlock);
      lastBlockNumber = blockNumber;
      if (JSON.stringify(blocks[0]) !== JSON.stringify(newBlock)) {
        setBlocks([newBlock, ...blocks.slice(0, 4)]);
        console.log("New Block");
        console.log(provider.pollingInterval);
      }
    }
  };
  if (provider) {
    provider.on("network", (newNetwork, oldNetwork) => {
      console.log({ newNetwork, oldNetwork });
      if (oldNetwork) {
        window.location.reload();
      }
    });
  }
  if (provider) {
    provider.on("block", (blockNumber) => {
      console.log(blockNumber);
    });
  }
  return (
    <GlobalContext.Provider value={{ blocks, provider, loading }}>
      {children}
    </GlobalContext.Provider>
  );
};
