import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SideBarDiv = styled.div`
  height: 100%;
  width: 221px;
  position: fixed;
  z-index: 1;
  top: 16px;
  left: 11px;
  overflow-x: hidden;
  padding-top: 20px;
  background-color: #d8d8d8;
  border: 1px solid rgb(151, 151, 151);
  > p {
    font-family: Roboto;
    font-size: 23px;
  }
`;

const Button = styled.button`
  background-color: #2bc1c4;
  color: #fff;
`;

const SideBar = props => (
  <SideBarDiv>
    <p>Lambda Notes</p>
    <Link to="/">
      <Button>View Your Notes</Button>
    </Link>
    <Button>+Create New Note</Button>
  </SideBarDiv>
);

export default SideBar;
