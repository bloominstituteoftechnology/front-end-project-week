import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <div>
    <h1>Lambda Notes</h1>
    <Link to="/">
      <div>View Your Notes</div>
    </Link>
    <Link to="/create">
      <div>+ Create New Note</div>
    </Link>
  </div>
);

export default Sidebar;
