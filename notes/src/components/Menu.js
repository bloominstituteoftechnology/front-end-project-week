import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <h1>Lambda Notes</h1>
      <Link to="/">
        <Button>View Your Notes</Button>
      </Link>
      <Link to="/create">
        <Button>+ Create New Note</Button>
      </Link>
    </div>
  );
};

export default Menu;
