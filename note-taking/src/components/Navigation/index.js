import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Link to="/">View Notes</Link> <br />
      <Link to="/createnotes">Create Notes</Link>
    </div>
  );
};

export default Navigation;
