import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul>
      <li>
        <NavLink to="/signup">SignUp </NavLink>
      </li>
      <li>
        <NavLink to="/signin">Log In </NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
