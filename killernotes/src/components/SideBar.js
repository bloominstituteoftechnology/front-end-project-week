import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SideBarDiv = styled.div`
  height: 100%;
  width: 221px;
  position: fixed;
  z-index: 0;
  top: 16px;
  left: 11px;
  overflow-x: hidden;
  padding-top: 20px;
  background-color: #d8d8d8;
  border: 1px solid rgb(151, 151, 151);
`;

const Text = styled.p`
  font-family: Roboto;
  font-size: 36px;
  line-height: 1;
  margin-left: 13px;
  margin-top: -4px;
`;

const ViewButton = styled.button`
  background-color: #2bc1c4;
  color: #fff;
  margin-top: -13px;
  margin-left: 13px;
  width: 193px;
  height: 44px;
  font-size: 16px;
`;

const NewButton = styled.button`
  background-color: #2bc1c4;
  color: #fff;
  margin-top: 18px;
  margin-left: 13px;
  width: 193px;
  height: 44px;
  font-size: 16px;
`;

const SideBar = props => (
  <SideBarDiv>
    <Text>Lambda Notes</Text>
    <Link to="/">
      <ViewButton>View Your Notes</ViewButton>
    </Link>
    <Link to="/add">
      <NewButton>+Create New Note</NewButton>
    </Link>
  </SideBarDiv>
);

export default SideBar;
