import React from "react";
import { Link } from "react-router-dom";

const Menu = (props) => {
  return (
    <div className={props.pink ? "menubar menubarpink" : props.blue ? "menubar menubarblue" : "menubar"}>
    <div className={props.deleting ? "delete-menu": null}></div>
      <h1 className="lambda">Lambda Notes</h1>
      <Link className={props.pink ? "menubtn menubtnpink" : props.blue ? "menubtn menubtnblue": "menubtn"} to="/">
        View Your Notes
      </Link>
      <Link className={props.pink ? "menubtn menubtnpink": props.blue ? "menubtn menubtnblue": "menubtn"} to="/new">
        + Create New Note
      </Link>
      <div className="theme">
      <h3>Change theme:</h3>
      <div onClick={props.origtheme}className="themebtn">Original</div>
      <div onClick={props.pinktheme}className="themebtn themebtnpink">Pink</div>
      <div onClick={props.bluetheme}className="themebtn themebtnblue">Blue</div>
      </div>
    </div>
  );
};

export default Menu;
