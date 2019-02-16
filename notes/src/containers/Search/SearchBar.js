import React from "react";
import styled from "styled-components";

const Search = styled.div`
display: flex;
justify-conent: space-arround;
align-items: center;
padding: 10px;
margin-top: 20px;

  ${'' /* h2 {
      margin-right:6px;
      margin-top:16px;
      align-self:center;
  } */}
`;

const Input = styled.input`
  border: 1px solid #ccc;
  justify-content: space-between;
  padding: 10px;
  width: 400px;
`;

const SearchBar = props => {

    return (
    <Search>
      {/* <h2>Search:</h2> {""} */}
    <Input
      type="text"
      name="search"
      value={props.search}
      onChange={props.handleChange}
      placeholder="Search..."
    />
        </Search>
    )
};

export default SearchBar