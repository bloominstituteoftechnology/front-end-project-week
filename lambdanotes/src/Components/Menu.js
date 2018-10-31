import React from "react";
import { Link } from "react-router-dom";
import '../App.css';


const Menu = (props) => {
  return (
    <div className="menu">
    <div className={props.deleting ? "delete-menu": null}></div>
      <h1>Lambda Notes</h1>
      <Link className="menu-link" to="/">
        View Your Notes
      </Link>
      <Link className="menu-link" to="/newnote">
        + Create New Note
      </Link>
    </div>
  );
};

export default Menu;