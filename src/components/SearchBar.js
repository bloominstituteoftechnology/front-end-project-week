import React from "react";

const SearchBar = props => {
  return (
    <div>
      <input
        className="search-input"
        placeholder="search"
        type="text"
        name="searchTerm"
        onChange={props.searchFilterHandler}
        value={props.searchTerm}
      />
    </div>
  );
};

export default SearchBar;
