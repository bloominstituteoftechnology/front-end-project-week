import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavButton = styled.button`
  height: 45px;
  width: 190px;
  margin: 0 auto;
  margin-top: 2rem;
  font-weight: bold;
  border: 1px solid black;
  border-radius: 2px;
`;

const SideBarButton = props => {
  return (
    <Link to={props.url}>
      <NavButton>{props.message}</NavButton>
    </Link>
  );
};

export default SideBarButton;
