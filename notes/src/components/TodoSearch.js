import React, { Component } from "react";
import "./TodoSearch.css";

// const Header = styled.div`
//     display: flex;
//     justify-content: space-between;
//     margin-top: 0.5%;
//     align-items: center;
// `;

// const LogoAndText = styled.div`
//     display: flex;
//     flex-wrap: nowrap;
//     align-items: center;
//     max-height: 50px;
//     justify-content: space-between;
//     width: 17%;
// `;

// const LogoHeader = styled.div`
//     font-size: 2rem;
//     border-left: 1px solid grey;
//     padding-left: 7%;
//     font-weight: normal;
// `;

// const Icons = styled.div`
//     display: flex;
//     justify-content: space-between;
//     width: 15%;
// `;

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
          // value='filterInput'
          onChange={props.handleChange}
        />
      </form>
      <img src={require("./trello-logo-blue.png")} />
    </div>
  );
};

export default SearchBar;
