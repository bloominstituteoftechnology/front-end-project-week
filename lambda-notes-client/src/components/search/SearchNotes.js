import React, { Fragment } from 'react'
import styled from "react-emotion";

const Input = styled("input")`
  padding: 8px;
  border-radius: 5px;
  border: 1.5px solid #CBCBCB;
  &:focus {
    outline: none;
  }
`;

const SearchNotes = props => {
  return (
    <Fragment>
      <label htmlFor="searchNotes"></label>
      <Input 
        type="text"
        id="searchNotes"
        name="searchNotes"
        placeholder="Search"
        value={props.searchNotes}
        onChange={props.handleOnChange}
      />
    </Fragment>
  );
};

export default SearchNotes;
