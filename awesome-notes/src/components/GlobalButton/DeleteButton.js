import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavButton = styled.button`
  height: 45px;
  width: 190px;
  margin: 0 auto;
  margin-top: 2rem;
  font-weight: bold;
  border: 1px solid #979797;
  border-radius: 2px;
  background-color: #d0021b;
`;

const DeleteButton = props => {
  return (
    <Link to="/">
      <NavButton onClick={() => props.delHandler(props.currentNote)}>
        {props.message}
      </NavButton>
    </Link>
  );
};

export default DeleteButton;
