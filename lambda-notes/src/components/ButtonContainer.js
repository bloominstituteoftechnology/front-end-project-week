import React, { Component } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const NoteAppButton = styled.button`
  background-color: #2ac0c4;
  color: white;
  width: 90%;
  font-size: 2rem;
  padding: 30px 5%;
  margin: 0 5%;
  margin-bottom: 30px;
`;

class ButtonContainer extends Component {
  render() {
    return (
      <SideBar>
        <Link to="/">
          {' '}
          <NoteAppButton>View Your Notes</NoteAppButton>
        </Link>
        <Link to="/new-note">
          {' '}
          <NoteAppButton>+ Create New Note</NoteAppButton>
        </Link>
      </SideBar>
    );
  }
}

export default ButtonContainer;
