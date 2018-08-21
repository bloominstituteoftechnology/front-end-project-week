import React from 'react';
import styled from 'styled-components';

const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  border-right: 1px solid #999999;
  background: lightgray;
  height: 200vh;

  h1 {
    color: #333333;
  }
`;

const Button = styled.button`
  width: 180px;
  height: 40px;
  padding: 0.25em 1em;
  margin: 1em 1em;
  background: #0ABAB5;
  color: white;
  font-weight: bold;
  border: 1px solid gray;
`;

function NoteNavigation (props) {
  return (
    <Navigation>
      <h1>Lambda Notes</h1>
      <Button onClick={props.viewList}>View Your Notes</Button>
      <Button onClick={props.viewAddNote}>+ Create New Note</Button>
    </Navigation>
  )
}

export default NoteNavigation;