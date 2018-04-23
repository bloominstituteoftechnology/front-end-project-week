import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  margin: 2%;
  background-color: #2EB8BC;
  height: 30%;
  width: 90%;
  font-size: 1rem;
  `;

const SideBarContent = styled.div`
  margin: 5% 5%;
`;

class SideBar extends Component {
  render() {
    return (
      <SideBarContent>
        <h1>Lambda Notes</h1>
        <Link to={'/'}>
          <StyledButton>View Your Notes</StyledButton>
        </Link>
        <Link to={`/create`}>
          <StyledButton>+ Create New Note</StyledButton>
        </Link>
      </SideBarContent>
    );
  }
}

export default SideBar;