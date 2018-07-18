import React from "react";
import styled from "styled-components";

const NavButton = styled.button`
  height: 45px;
  width: 190px;
  margin: 0 auto;
  margin-top: 2rem;
  font-weight: bold;
  border: 1px solid black;
  border-radius: 2px;
  background-color: ${props => (props.red ? "#D0021B" : "#2BC1C4")};
`;

const GlobalButton = props => {
  return <NavButton>{props.message}</NavButton>;
};

export default GlobalButton;
