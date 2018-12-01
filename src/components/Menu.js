import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const Menu = () => {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div className="menu">
      <h1>Nicky Notes</h1>
      <Link to="/">
        <Button>View Your Notes</Button>
      </Link>
      <Link to="/create">
        <Button>+ Create New Note</Button>
      </Link>
      <Button id="logout" onClick={logout}>
        Log Out
      </Button>
    </div>
  );
};

export default Menu;
