import React from "react";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";
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
      <input
        type="text"
        name="search"
        maxLength="20"
        placeholder="🔍 Search"
        value={props.search}
        onChange={props.handleSearchChange}
      />
      <Link to="/api/all">
        <button>View Your Notes</button>
      </Link>
      <Link to="/api/create">
        <button>+ Create New Note</button>
      </Link>
      <CSVLink
        className="csv-export"
        filename={"exports.csv"}
        data={props.notes}
      >
        <button>CSV Export</button>
      </CSVLink>
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
  height: 150vh;

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
