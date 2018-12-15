import React, {Component} from "react";
import styled from "styled-components";
import {Connect} from "react-redux";


const InputWrapper = styled.div`
  width: 300px;
  margin: auto;
  display: flex;
`;

const SearchInput = styled.input`
  height: 30px;
  width: 300px;
  text-align: center;
`;

const SearchIcon = styled.i`
  position: absolute;
  display: inline;
  top: 33px;
  padding-left: 10px;
`;
const Search = props => {
  return (
    <InputWrapper>
      <SearchIcon className="fas fa-search" />
      <SearchInput
        type="text"
        autoComplete={false}
        autoComplete={false}
        placeholder="Search"
        onKeyDown={props.searchPosts}
      />
    </InputWrapper>
  );
};
export default SearchBar;


