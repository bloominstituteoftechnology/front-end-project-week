import React from 'react';
import styled from 'styled-components';

const SideBar = styled.div`
  border: 1px solid blue;
  width: 33%;
`;

const SideBarView = props => {
  return <SideBar>Lambda Notes</SideBar>;
};

export default SideBarView;
