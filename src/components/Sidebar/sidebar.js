import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";
import styled from "styled-components";

//import  NoteList from '../NoteList/notelist';

const SearchInput = styled.input`
  font-family: "Roboto", sans-serif;
  border: solid #740078 0.5px;
  height: 30px;
  width: 80%;
  font-size: 1em;
  padding: 8px;
  margin: 0 7.5% 15px;
  text-align: center;
  box-shadow: 2 4px 8px 2 rgba(0, 0, 0, 0.6);
  transition: 1.6s;
  &:hover {
    background-color: pink;
    cursor: pointer;
  }
`;

const DivClick = styled.div`
  margin: 0 7.5% 15px;
  border: solid #740078 0.5px;
  background-color: #4aacac;
  height: 30px;
  width: 80%;
  padding: 8px;
  color: white;
  font-size: 1em;
  text-align: center;
  font-family: "Roboto", sans-serif;
  box-shadow: 2 4px 8px 2 rgba(0, 0, 0, 0.6);
  transition: 1.6s;
  &:hover {
    background-color: #740078;
    cursor: pointer;
  }
`;
const SidebarButton = styled.div`
  color: white;
  font-size: 1em;
  text-align: center;
  font-family: "Roboto", sans-serif;
  background: #2bc1c4;
  color: #ffffff;
  border: solid #740078 0.5px;
  box-shadow: 2 4px 8px 2 rgba(0, 0, 0, 0.6);
  transition: 1.6s;
  width: 80%;
  height: 30px;
  margin: 0 7.5% 15px;
  padding: 8px;
  justify-content: center;

  > p {
    color: white;
  }
  &:hover {
    background-color: #740078;
    cursor: pointer;
  }
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
<div className="sideBarButton">
      <Link to="/">
        <SidebarButton>View Your Notes</SidebarButton>
      </Link>

      <Link to="/create">
        <SidebarButton>+ Create New Note</SidebarButton>
      </Link>
      <CSVLink
        className="csv-export"
        filename={"lambdanotes-export.csv"}
        data={"NoteList"}
      >
        <SidebarButton>Export To CSV</SidebarButton>
      </CSVLink>
      <SearchInput
        onChange={props.handleSearchChange}
        type="text"
        name="search"
        autoComplete="off"
        placeholder="Search"
      />
      <DivClick
        onClick={() => {
          localStorage.clear();
          window.location.reload();
        }}
      >
        Log Out
      </DivClick>
    </div>
    </div>
  );
};

export default Sidebar;
