import React from "react";
import { Link } from "react-router-dom";

export const SideBar = props => {
  return (
    <div className="col-3 left__side">
      <h2 className="sidebar__head">Lambda Notes</h2>
      <Link to="/" className="sidebar__button">
        View Your Notes
      </Link>
      <Link to="/createNewNote" className="sidebar__button">
        Create New Note
      </Link>
      <a
        href={props.export()}
        download="LambdaNotesExport.csv"
        className="sidebar__button csv__btn"
      >
        Export to CSV
      </a>
    </div>
  );
};
