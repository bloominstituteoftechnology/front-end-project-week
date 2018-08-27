import React from "react";
import "./Sidebar.css";
//we will need this for link to our /notes page and /add page - each button will be wrapped in a <Link to="/notes">button here etc
import { Link }  from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="Sidebar_header">
      <Link to="/">
        <h1>
          Lambda <br /> Notes
        </h1>
        </Link>
      </div>
      <Link to="/notes">
        <button className="Button">View Your Notes</button>
      </Link>

      <button className="Button">+ Create New Note</button>
    </div>
  );
};

export default Sidebar;
