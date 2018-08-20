import React from 'react';
import styled from 'styled-components';

const Note = styled.div`
  background-color: white;
  border: 1px solid black;
  width: 170px;
  height: 170px;
  margin: 0 10px;
`

const NoteThumbnail = ({ note }) => (
  <Note>
    <h4>{note.title}</h4>
    <p>{note.textBody}</p>
  </Note>
)

export default NoteThumbnail;