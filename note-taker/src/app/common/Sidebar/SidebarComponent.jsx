import React from "react";
import styled from "styled-components";
import "../../styles/custom-props.css";
import GeneralBtn from "../GeneralBtn/GeneralBtn";
import { Link } from "react-router-dom";
import { CSVLink } from 'react-csv';
const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 20px;
  width: var(--sidebar-width);
  background: var(--sidebar-bg);
`;
const Header = styled.h1`
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  font-size: 3rem;
  margin-bottom: 40px;
  line-height: 2.5rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  & button {
    margin-bottom: 20px;
  }
`;

const SidebarComponent = props => {
  const csvData = [['Note Title', 'Note Body']];
  props.notesData.forEach(note => {
    csvData.push([note.title, note.textBody]);
  })
  return (
    <SidebarWrapper>
      <Header>Lambda Notes</Header>
      <ButtonsContainer>
        <Link to="/">
          <GeneralBtn>View your notes</GeneralBtn>
        </Link>
        <Link to = '/create-new'>
          <GeneralBtn> + Create new note</GeneralBtn>
        </Link>
        <GeneralBtn onClick = {() => props.toggleTheme(props.isDark)}>Light / Dark Toggler</GeneralBtn>
        <CSVLink data={csvData}>
        <GeneralBtn>Export to CSV</GeneralBtn>
        </CSVLink>
      </ButtonsContainer>
    </SidebarWrapper>
  );
};

export default SidebarComponent;
