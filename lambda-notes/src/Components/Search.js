import React from "react";

const Search = props => (
  <div className="search">
    <input
      type="text"
      name="search"
      onChange={props.changeHandler}
      value={props.search}
      placeholder="Search..."
    />
  </div>
);

export default Search;