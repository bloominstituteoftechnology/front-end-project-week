import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #D3D2D3;
  border: 1px solid #B7B7B7;
`;

const SidebarHeader = styled.h1`
  font-size: 50px;
  font-weight: bold;
  color: #414141;
  padding: 20px 15px;
  margin: 0 auto
`;

const SidebarButton = styled.div`
  /* text-align: center; */
  display: flex;
  align-items: center;
  color: #FFFFFF;
  background: #24B8BD;
  border: 1px solid #B7B7B7;
  height: 25px;
  width: 85%;
  padding: 10px 0;
  margin: 10px 15px;
`;

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SidebarContainer>
        <SidebarHeader>Lambda Notes</SidebarHeader>
        <SidebarButton>View Your Notes</SidebarButton>
        <SidebarButton>+ Create New Note</SidebarButton>
      </SidebarContainer>
    )
  }
}
