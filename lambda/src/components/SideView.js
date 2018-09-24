import React from "react";
import { Link } from "react-router-dom";

const SideView = () => {
  return (
    <div className="Side-container">
      <h1>Lambda Notes</h1>
      <Link to="/notes">
        <button className="ViewNotes">
          <h1>View Your Notes</h1>
        </button>
      </Link>
      <Link to="/create">
        <button className="CreateNotes">
          <h1>Create New Note</h1>
        </button>
      </Link>
    </div>
  );
};

export default SideView;
