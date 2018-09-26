import React from 'react';

import styled, {css} from 'styled-components';

const Search = styled.input`
  width: 250px;
  height: 35px;
  border-radius: 4px;
  padding-left: 1%;
  border: 1px solid lightgray;
  &::-webkit-input-placeholder{
    text-align: center;
  }
`;

const SearchBar = (props) => {
    console.log(props);
    return (
        <form onSubmit={props.searchSubmit}>
        <Search value={props.searchInput} placeholder="Search" onChange={props.searchNotes} />
        </form>
    );
}

export default SearchBar;