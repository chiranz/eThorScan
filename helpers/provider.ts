import { providers } from "ethers";

type Provider = providers.Web3Provider | providers.JsonRpcProvider;

export const getProvider = async () => {
  let provider: Provider;
  if (
    typeof window !== "undefined" &&
    typeof (window as any).ethereum !== "undefined"
  ) {
    console.log(process.env.INFURA_API);
    provider = new providers.Web3Provider((window as any).ethereum);
  } else {
    provider = new providers.JsonRpcProvider(process.env.INFURA_API);
  }
  provider.pollingInterval = 1200;

  (window as any).provider = provider;
  return provider;
};
