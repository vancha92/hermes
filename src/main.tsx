import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
import { MetaMaskProvider } from "@metamask/sdk-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MetaMaskProvider
      debug={false}
      sdkOptions={{
        // extensionOnly: true,
        logging: {
          developerMode: false,
        },
        // communicationServerUrl: import.meta.env.VITE_APP_COMM_SERVER_URL,
        checkInstallationImmediately: false, // This will automatically connect to MetaMask on page load
        i18nOptions: {
          enabled: true,
        },
        dappMetadata: {
          name: "Demo React App",
          url: window.location.protocol + "//" + window.location.host,
        },
      }}
    >
      <App />
    </MetaMaskProvider>
  </React.StrictMode>
);
