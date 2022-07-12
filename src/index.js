import React from "react";
import ReactDoM from "react-dom";

import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";

ReactDoM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
