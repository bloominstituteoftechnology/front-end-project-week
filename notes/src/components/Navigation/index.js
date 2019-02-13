import React from "react";
import { Link } from "react-router-dom";

import "./nav.css";

const Navigation = props => {
  return (
    <aside className="aside-nav">
      <h1>Lambda Notes</h1>
      <section className="buttons">
        <Link
          className="links"
          onClick={() => props.getNotes()}
          name="ListView"
          to="/"
        >
          View Your Notes
        </Link>
        <Link className="links" name="CreateNote" to="/note/create">
          + Create New Note
        </Link>
        <Link className="links" to="/auth">
          Sign In/Sign Up
        </Link>
      </section>
    </aside>
  );
};

export default Navigation;
