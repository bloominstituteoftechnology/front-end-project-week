import React from "react";
import { Link } from "react-router-dom";
import "../components.css";
import styled from "styled-components";

export default () => {
  return (
    <Wrapper>
      <h1>
        Lambda
        <br />
        Notes
      </h1>
      <Link to="/">
        <button>View Your Notes</button>
      </Link>
      <Link to="/notes/add">
        <button>+ Create New Note</button>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 250px;
  background: #d8d8d8;
  border-right: 1px solid #979797;
  box-sizing: border-box;
  height: 110vh;

  button {
    margin-bottom: 15px;
  }

  h1 {
    font-size: 35px;
    line-height: 0.9;
    margin: 15px 75px 15px 0;
  }
`;
