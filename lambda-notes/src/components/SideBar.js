import React from "react";
import { Link } from "react-router-dom";

export const SideBar = props => {
  const isLoggedIn = props.isLoggedIn;
  const button = isLoggedIn ? (
    <a className="sidebar__button csv__btn" onClick={() => props.logout()}>
      Logout
    </a>
  ) : (
    <a
      className="sidebar__button csv__btn"
      onClick={() => props.authenticate("Github")}
    >
      Login with Github
    </a>
  );
  return (
    <div className="col-3 left__side">
      <Link to="/">
        <h2 className="sidebar__head">Lambda Notes</h2>
      </Link>
      <Link to="/displayNotes" className="sidebar__button">
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
      {button}
      <p className="username"> Welcome {props.user || null} </p>
    </div>
  );
};
