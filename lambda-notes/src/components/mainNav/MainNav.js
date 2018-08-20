import React from "react";

export const MainNav = props => {
  return (
    <div className="mainNavDiv">
      <h1>Lambda</h1>
      <h1>Notes</h1>
      <div className="mainNavButtonsDiv">
        <button>View Your Notes</button>
        <button>+Create New Note</button>
      </div>
    </div>
  );
};
