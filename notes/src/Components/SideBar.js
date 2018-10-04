import React from "react";
import { Link } from "react-router-dom";
import "./Components.css";
import styled from "styled-components";

export default props => {
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
      <input
        type="text"
        name="search"
        maxLength="20"
        placeholder="Search..."
        value={props.search}
        onChange={props.handleSearchChange}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 25%;
  background: #d8d8d8;
  border-right: 1px solid #979797;
  box-sizing: border-box;
  height: 100vh;

  button {
    margin-bottom: 15px;
  }

  h1 {
    font-size: 35px;
    line-height: 0.9;
    margin: 15px 75px 15px 0;
  }

  input {
    width: 200px;
    margin-bottom: 10px;
  }
`;
