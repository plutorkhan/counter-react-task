import React from "react";
import ReactDOM from "react-dom";

import ParentComponent from "./ParentComponent";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ParentComponent />
  </React.StrictMode>,
  document.getElementById("root")
);
