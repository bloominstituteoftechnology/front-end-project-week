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
  width: 80%;
  margin-bottom: 20px;
  font-size: 1.5rem;
  padding: 20px 0;
`;

class ButtonContainer extends Component {
  render() {
    return (
      <SideBar>
        <NoteAppButtons>View Your Note</NoteAppButtons>
        <NoteAppButtons>+ Create New Note</NoteAppButtons>
      </SideBar>
    );
  }
}

export default ButtonContainer;
