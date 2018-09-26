import React from 'react';
import styled from 'styled-components';

const Search = (props) => {
  return (
    <SearchForm autocomplete="off" onSubmit={props.handleSearch}>
      <i className="fa fa-search fa-2x" />
      <SearchInput
        type="text"
        name="searchInput"
        placeholder="Search..."
        value={props.searchInput}
        onChange={props.handleInput}
      />
    </SearchForm>
  );
};

export default Search;

const SearchForm = styled.form`
  position: absolute;
  top: 20px;
  right: 95px;
`;

const SearchInput = styled.input`
  margin-left: 5px;
  font-size: 1rem;
  border-radius: 10px;
  border: 1px solid #cfcfcf;
  padding-left: 10px;
`;
