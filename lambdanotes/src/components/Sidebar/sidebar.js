import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { CSVLink, CSVDownload } from "react-csv";
import styled from "styled-components";

const SearchInput = styled.input`
  font-family: "Roboto", sans-serif;
  height: 30px;
  width: 80%;
  font-size: 1em;
  padding: 8px;
  margin: 0 7.5% 15px;
  justify-content: center;
`;

const Sidebar = props => {
  return (
    <div className="sideBar">
      <div className="title">
        <h1>
          {" "}
          Lambda <br />
          Notes{" "}
        </h1>
      </div>
      <Link to="/">
        <button className="sidebar-button">View Your Notes</button>
      </Link>
      <Link to="/create">
        <button className="sidebar-button">+ Create New Note</button>
      </Link>
      <CSVLink className="csv-export" filename={"notes-export.csv"} data={""}>
        <button className="sidebar-button">Export To CSV</button>
      </CSVLink>
      <SearchInput
        onChange={props.handleSearchChange}
        type="text"
        value={props.search}
        name="search"
        autoComplete={false}
        placeholder="Search"
      />
    </div>
  );
};

export default Sidebar;
