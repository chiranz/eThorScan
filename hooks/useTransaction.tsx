import { useEffect, useState } from "react";
import { getProvider } from "../helpers/provider";
import { RawTxn } from "../types";

const useTransaction = (txHash: string) => {
  const [txn, setTxn] = useState<RawTxn>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getTransaction() {
      const provider = await getProvider();
      console.log(txHash);
      const _txn = (await provider.getTransaction(txHash)) as unknown as RawTxn;
      setTxn(_txn);
      setLoading(false);
    }
    getTransaction();
  }, []);
  return { txn, loading };
};

export default useTransaction;
