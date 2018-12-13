import React, { Component } from "react";
import "./TodoSearch.css";

const SearchBar = props => {
  return (
    <div className="search-container">
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
      <img src={require("./trello-logo-blue.png")} />
    </div>
  );
};

export default SearchBar;
