import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">View Your Notes </NavLink>
      </li>
      <li>
        <NavLink to="/create">New Note </NavLink>
      </li>
      <li>
        <NavLink to="/">Log Out </NavLink>
      </li>
      <li>
        <NavLink to="/">PP</NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
