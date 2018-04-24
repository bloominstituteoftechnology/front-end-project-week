import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav-bar">
      <Button href="/">View Your Notes</Button>
      <br />
      <Button href="/AddNote"> + Create New Note </Button>
    </div>
  );
};

export default Navigation;
