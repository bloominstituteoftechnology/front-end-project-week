import React from 'react';
import styled from 'styled-components';

const NoteContainer = styled.div`
color: black;
text-decoration: none;
text-align: left;
padding-left: 10px;

h3 {
    border-bottom: 2px solid #D5D5D5;
    width: 200px;
    padding-bottom: 5px;
}

p {
    height: 131px;
    overflow: hidden;
}
`

const Note = props => {
  return (
    <NoteContainer>
      <h3>{props.title}</h3>
      <p>{props.textBody}</p>
    </NoteContainer>
  );
};

Note.defaultProps = {
  title: '',
  textBody: ''
};

export default Note;