import React, { Component } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NoteAppButtons = styled.button`
  background-color: #2ac0c4;
  color: white;
  width: 28rem;
  margin-bottom: 30px;
  font-size: 2rem;
  padding: 30px 0;
`;

class ButtonContainer extends Component {
  render() {
    return (
      <SideBar>
        <Link to="/">
          {' '}
          <NoteAppButtons>View Your Notes</NoteAppButtons>
        </Link>
        <Link to="/new-note">
          {' '}
          <NoteAppButtons>+ Create New Note</NoteAppButtons>
        </Link>
      </SideBar>
    );
  }
}

export default ButtonContainer;
