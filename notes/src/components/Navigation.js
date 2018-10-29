import React from "react";
import { NavLink } from "react-router-dom";

import { NavBar, Button } from "../styles";

const Navigation = () => (
  <NavBar>
    <h1>Lambda Notes</h1>
    <NavLink exact to="/notes">
      <Button>View Your Notes</Button>
    </NavLink>
    <NavLink to="/form">
      <Button>+ Create New Note</Button>
    </NavLink>
  </NavBar>
);

export default Navigation;
