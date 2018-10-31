import React from "react";

const SearchBar = props => {
  console.log(props);
  return (
    <div>
      <input 
      className="search-input" 
      placeholder="search" type="text" 
      name="title" 
      onChange={props.searchFilterHandler} 
      value={props.searchTerm} />
    </div>
  );
};

export default SearchBar;
