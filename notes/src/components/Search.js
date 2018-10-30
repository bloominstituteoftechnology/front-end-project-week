import React from "react";

const Search = props => (
  <div className="search">
    <input
      type="text"
      name="search"
      onChange={props.handleInput}
      value={props.search}
      placeholder="Search"
    />
  </div>
);

export default Search;
