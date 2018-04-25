import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

import "./Menu.css";

const Menu = props => {
  return (
    <div className="menu">
      <h1>Lambda Notes</h1>
      <Link to="/">
        <Button color="info">
          <b>View Your Notes</b>
        </Button>
      </Link>
      <Link to={`/create`}>
        <Button color="info">
          <b>+ Create New Note</b>
        </Button>
      </Link>
    </div>
  );
};

export default Menu;
