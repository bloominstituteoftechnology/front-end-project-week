import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SidebarContainer>
        <SidebarHeader>Lambda Notes</SidebarHeader>
        <Link to='/'>
          <SidebarButton>View Your Notes</SidebarButton>
        </Link>
        <Link to='/create'>
          <SidebarButton>+ Create New Note</SidebarButton>
        </Link>
      </SidebarContainer>
    )
  }
}

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #D3D2D3;
  border: 1px solid #B7B7B7;
  width: 25%;
`;

const SidebarHeader = styled.h1`
  font-size: 50px;
  font-weight: bold;
  color: #414141;
  padding: 20px 15px;
  margin: 0 auto
`;

const SidebarButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #FFFFFF;
  background: #24B8BD;
  border: 1px solid #B7B7B7;
  height: 45px;
  width: 85%;
  padding: 10px 0;
  margin: 10px 15px;
`;
