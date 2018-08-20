import React from 'react';
import styled from 'styled-components';

const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  border-right: 1px solid gray;
  background: lightgray;
  height: 100vh;
`;

const Button = styled.button`
  width: 150px;
  padding: 0.25em 1em;
  margin: 1em 1em;
  background: #0ABAB5;
  color: white;
  border: 1px solid gray;
`;

function NoteNavigation (props) {
  return (
    <Navigation>
      <h1>Lambda Notes</h1>
      <Button onClick={props.viewNote}>View Your Notes</Button>
      <Button onClick={props.addNote}>+ Create New Note</Button>
    </Navigation>
  )
}

export default NoteNavigation;