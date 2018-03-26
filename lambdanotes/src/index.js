import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
