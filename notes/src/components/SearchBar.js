import React from 'react';
const SearchBar = props => {
  return (
      <div>
        <input
          className="searchbar"
          placeholder="search"
          onChange={(value) => props.search(value)}
          type='text'
          value=''
        ></input>
      </div>
      );
};




export default SearchBar;
