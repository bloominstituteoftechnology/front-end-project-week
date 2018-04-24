import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";

const NoteApp = () => {
  return (
    <div>
      <App />
    </div>
  );
};

ReactDOM.render(
  <Router>
    <NoteApp />
  </Router>,
  document.getElementById("root")
);
