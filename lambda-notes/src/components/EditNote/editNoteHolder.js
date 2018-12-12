import React from "react";
import SideBar from "../sidebar";
import EditNote from "./editNote";
import styled from 'styled-components';

const EditNoteContainer = styled.div`
display: flex;
    width: 1200px;
    margin: 0 auto;
`;



const EditNoteHolder = props => {
  return (
    <EditNoteContainer>
      <SideBar />
      <EditNote {...props} />
    </EditNoteContainer>
  );
};

export default EditNoteHolder