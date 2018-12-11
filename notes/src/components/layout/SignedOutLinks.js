import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

const Button = styled.div`
  background-color: #2bc1c4;
  color: white;
  padding: 5px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 13px;
  width: 100px;
  text-decoration: none;
  margin-bottom: 10px;
  margin-top: 6px;
  width: 175px;
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-weight: bolder;
  border-style: solid;
  border-color: #979797;
  border-width: .5px;
`;


const SignedOutLinks = () => {
  return (
    <ul>
      <li>
        <NavLink to="/signup">
        <Button>SignUp </Button></NavLink>
      </li>
      <li>
        <NavLink to="/login">
        <Button>Log In</Button> </NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
