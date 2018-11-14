import React from "react";
import { Link } from "react-router-dom";

const Navigation = props => {
  return (
    <aside>
      <h1>Lambda Notes</h1>
      <Link className="links" onClick={() => props.getNotes()} name="ListView" to="/">
        View Your Notes
      </Link>
      <Link className="links" name="CreateNote" to="/note/create">
        + Create New Note
      </Link>
    </aside>
  );
};

export default Navigation;
