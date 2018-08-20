import React from "react";
import { Link } from "react-router-dom";

import "../../css_styles/mainNav.css";

export const MainNav = props => {
  return (
    <div className="mainNavDiv">
      <h1>Lambda</h1>
      <h1>Notes</h1>
      <div className="mainNavButtonsDiv">
        <Link to={"/"}>
          <button>View Your Notes</button>
        </Link>
        <button>+Create New Note</button>
      </div>
    </div>
  );
};
