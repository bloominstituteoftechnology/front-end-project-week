import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { updateSearchTerm } from "../actions";

const InputWrapper = styled.div`
  margin-bottom: 3rem;
  max-width: 88rem;
  width: 75%;
`;

const SearchInput = styled.input`
  display: block;
  width: 100%;
  border: none;
  border: 3px solid transparent;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  font-size: inherit;
  color: inherit;
  font-family: inherit;
  transition: all 0.2s;

  &:focus {
    border-bottom-color: #26a69a;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    outline: none;
  }

  &::placeholder {
    color: #bdbdbd;
  }

  &:not(:placeholder-shown) + label {
    transform: translateY(-3rem) scale(0.8);
    opacity: 1;
  }
`;

const SearchLabel = styled.label`
  position: absolute;
  top: 1rem;
  left: 1rem;
  transform-origin: left;
  opacity: 0;
  transition: all 0.3s;
`;

const SearchBar = ({ updateSearchTerm, term }) => {
  return (
    <InputWrapper>
      <div style={{ position: "relative" }}>
        <SearchInput
          type="text"
          placeholder="Search"
          autoComplete="off"
          value={term}
          onChange={({ target: { value } }) => updateSearchTerm(value)}
        />
        <SearchLabel>Search</SearchLabel>
      </div>
    </InputWrapper>
  );
};

export default connect(
  ({ term }) => ({ term }),
  { updateSearchTerm }
)(SearchBar);
