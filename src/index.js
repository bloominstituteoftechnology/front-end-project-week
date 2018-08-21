import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";

import Authenticate from "./authentication/authenticate";
const WrappedApp = Authenticate(App);

ReactDOM.render(
  <Router>
    <WrappedApp />
  </Router>,
  document.getElementById("root")
);
