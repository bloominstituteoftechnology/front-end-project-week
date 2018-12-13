import React, { Component } from "react";
import "./TodoSearch.css";
import { Link } from "react-router-dom";

const SearchBar = props => {
  return (
    <div className="search-container">
      <div className="left-buttons">
        <button className="sort-button" onClick={props.sortTodos}>
          Sort
        </button>
        <button className="csv-button" onClick={props.exportCSV}>
          Export to CSV
        </button>
        <form className="search" onSubmit={props.filterTodos}>
          <input
            className="search-input"
            type="text"
            placeholder="Search.."
            name="filterInput"
            onChange={props.handleChange}
          />
        </form>
      </div>
      <img src={require("./trello-logo-blue.png")} />
      <Link to={"/todoForm"}>
        <button className="add-list">Add another note</button>
      </Link>
    </div>
  );
};

export default SearchBar;
