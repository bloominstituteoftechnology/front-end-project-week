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

const Icon = styled.div`
  background-color: #2bc1c4;
  color: white;
  padding: 5px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 27px;
  width: 100px;
  text-decoration: none;
  margin-bottom: 10px;
  margin-top: 6px;
  width: 175px;
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-weight: light;
  width: 50px;
      height: 50px;
      background: red;
      border-radius: 50%
`;



const SignedInLinks = () => {
  return (
    <ul>
       
      <li>
        <NavLink to="/">
          <Button>View Your Notes</Button>{" "}
        </NavLink>
      </li>
      <li>
        <NavLink to="/create">
          <Button>+ Create New Note </Button>{" "}
        </NavLink>
      </li>
      <li>
        <NavLink to="/">
          <Button>Log Out </Button>
        </NavLink>
      </li>
      <li>
        <NavLink to="/"><Icon>PP</Icon></NavLink>
      </li>
    
    </ul>
  );
};

export default SignedInLinks;
