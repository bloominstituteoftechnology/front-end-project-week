import React, { Component } from 'react';
import styled from 'styled-components';

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NoteAppButtons = styled.button`
  background-color: #2ac0c4;
  color: white;
  width: 90%;
  margin-bottom: 30px;
  font-size: 2rem;
  padding: 30px 0;
`;

class ButtonContainer extends Component {
  render() {
    return (
      <SideBar>
        <NoteAppButtons>View Your Notes</NoteAppButtons>
        <NoteAppButtons>+ Create New Note</NoteAppButtons>
      </SideBar>
    );
  }
}

export default ButtonContainer;
