import React from "react";
import "../App.css";

const Nav = props => {
  return (
    <div className="navbar">
      <h1>
        Lambda
        <br />
        Notes
      </h1>
      <div className="button" onClick={props.viewAllClickHandler}>
        View Your Notes
      </div>
      <div className="button">+ Create New Note</div>
    </div>
  );
};

export default Nav;
