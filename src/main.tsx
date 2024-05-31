import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
import { MobileMenuProvider } from "./context/MobileMenuContext.tsx";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MobileMenuProvider>
      <Router>
        <App />
      </Router>
    </MobileMenuProvider>
  </React.StrictMode>
);
