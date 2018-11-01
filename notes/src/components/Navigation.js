import React from "react";

import Search from "../components/Search";

import { NavLink } from "react-router-dom";

import { NavBar, Button } from "../styles";

const Navigation = ({ editing, cancelEdit }) => (
  <NavBar>
    <NavLink exact to="/" onClick={editing ? cancelEdit : null}>
      <h1>Lambda Notes</h1>
    </NavLink>
    <NavLink exact to="/" onClick={editing ? cancelEdit : null}>
      <Button>View Your Notes</Button>
    </NavLink>
    <NavLink to="/form">
      <Button>{editing ? "Edit Note" : "+ Create New Note"}</Button>
    </NavLink>
    <Search />
    <Button
      onClick={() => {
        localStorage.removeItem("username");
        window.location.reload();
      }}
    >
      Logout
    </Button>
  </NavBar>
);

export default Navigation;
