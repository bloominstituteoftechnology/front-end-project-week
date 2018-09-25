import React from "react";
import SideBar from "../sidebar";
import ListView from "../ListView/listView";
import NoteSearch from "../NoteSearch/noteSearch";
import styled from "styled-components";
//nd-project-week/src/components/NoteSearch/noteSearch.js

const SearchDisplayContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  height: auto;
  min-height: 100vh;
  border: 1px solid red;
`;
const SearchDisplayDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const NoteSearchHolder = props => {
  return (
    <SearchDisplayContainer>
      <SideBar />
      <SearchDisplayDiv>
        <NoteSearch {...props} notes={props.notes} />
      </SearchDisplayDiv>
    </SearchDisplayContainer>
  );
};

export default NoteSearchHolder;
