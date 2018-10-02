import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 15px;
  width: 250px;
  background: #d8d8d8;
  border-right: 1px solid #979797;
  box-sizing: border-box;
  height: 100%;
`;

const SideBar = props => {
  return (
    <Div>
      <h1>
        Lambda <br /> Notes{" "}
      </h1>
      <Link to="/">
        <button>View Your Notes</button>
      </Link>
      <Link to="/notes/add">
        <button>Create New Note</button>
      </Link>
    </Div>
  );
};

export default SideBar;
