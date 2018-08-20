import React from "react";
import { Link } from "react-router-dom";

const Menu = (props) => {
  return (
    <div className="menubar">
    <div className={props.deleting ? "delete-menu": null}></div>
      <h1 className="lambda">Lambda Notes</h1>
      <Link className="menubtn" to="/">
        View Your Notes
      </Link>
      <Link className="menubtn" to="/new">
        + Create New Note
      </Link>
    </div>
  );
};

export default Menu;
