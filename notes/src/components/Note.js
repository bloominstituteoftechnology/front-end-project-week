import React from 'react';
import styled from 'styled-components';

const NoteContainer = styled.div`
color: red;
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