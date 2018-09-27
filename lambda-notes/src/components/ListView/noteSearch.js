import React from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  width: auto;
  background-color: #f2eff1;
`;

const SearchNotesInput = styled.input`
  height: 40px;
  width: 100%;
  border-radius: 5px;
  font-size: 20px;
  margin-top: 45px;
  margin-left: 27%
  ::placeholder {
    padding-left: 10px;
  }
  @media(max-width:770px){
    width:80%;
    font-size:16px
    margin-left:10%;
  }
`;

const NoteSearch = props => {
  return (
    <SearchContainer>
      <SearchNotesInput
        type="text"
        name="filteredNotes"
        placeholder="Search Titles"
        onChange={props.searchPostsHandler}
      />
    </SearchContainer>
  );
};

export default NoteSearch;
