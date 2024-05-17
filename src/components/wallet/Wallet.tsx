import { useSDK } from "@metamask/sdk-react";

const Wallet = () => {
  const { provider } = useSDK();

  const connect = async () => {
    // try {
    //   await sdk?.connect();
    // } catch (error) {
    //   console.log(error);
    // }

    try {
      await provider?.request({
        method: "eth_requestAccounts",
        params: [],
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      tabIndex={0}
      role="button"
      className="btn btn-outline"
      onClick={() => connect()}
    >
      Connect Wallet
    </div>
  );
};

export default Wallet;
