import { useEffect, useState } from "react";
import { getProvider } from "../helpers/provider";
import { RawBlock } from "../types";

const useBlock = (blockHeight: string) => {
  const [block, setBlock] = useState<RawBlock>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getBlock() {
      const provider = await getProvider();
      console.log(blockHeight);
      const _block = (await provider.getBlock(
        +blockHeight
      )) as unknown as RawBlock;
      console.log(_block);
      setBlock(_block);
      setLoading(false);
    }
    getBlock();
  }, []);
  return { block, loading };
};

export default useBlock;
