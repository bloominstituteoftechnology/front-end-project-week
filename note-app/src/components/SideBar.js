import React from "react";
import { Link } from "react-router-dom";

const SideBar = props => {
  return (
    <div>
      <div>
        <h1>
          Lambda <br />Notes{" "}
        </h1>
      </div>
      <Link to="/">
        <button>View Your Notes</button>
      </Link>
      <Link to="/notes/new">
        <button>+ Create New Note</button>
      </Link>
    </div>
  );
};
