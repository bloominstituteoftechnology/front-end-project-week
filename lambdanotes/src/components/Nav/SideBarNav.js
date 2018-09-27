import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// import NotesPage from '../notes/NotesPage';

const SideBarNavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 245px;
  padding: 20px 0px 0px 20px;
`;
const HeaderWrapper = styled.h1`
  font-size: 48px;
  margin-bottom: 35px;
`;
const SideBarButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 210px;
  height: 47px;
  border: 1px solid grey;
  background: #24b8bd;
  font-size: 18px;
  text-decoration: none;
  margin-bottom: 15px;
`;
const SideBarNav = () => {
  return (
    <SideBarNavWrapper className="SideBarNav">
      <HeaderWrapper>Lambda Notes</HeaderWrapper>
      <SideBarButton>
        <Link to="/" style={{ textDecoration: 'none' }}>
          View Your Notes
        </Link>
      </SideBarButton>
      <SideBarButton>
        <Link to="/addnote" style={{ textDecoration: 'none' }}>
          Add Note
        </Link>
      </SideBarButton>
    </SideBarNavWrapper>
  );
};

export default SideBarNav;
