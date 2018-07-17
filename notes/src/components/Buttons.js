import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const Buttons = () => {
  return (
    <div>
      <h2>Lambda Notes</h2>
      <Link exact to="/">
        <Button>View Your Notes</Button>
      </Link>
      <Link exact to="/create">
        <Button>+ Create New Note</Button>
      </Link>
    </div>
  );
};

export default Buttons;
