import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// import NotesPage from '../notes/NotesPage';

const SideBarNavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 245px;
`;
const SideBarNav = () => {
  return (
    <SideBarNavWrapper className="SideBarNav">
      <Link to="/">View Your Notes</Link>
      <Link to="/addnote">Add Note</Link>
    </SideBarNavWrapper>
  );
};

export default SideBarNav;
