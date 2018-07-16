import React from 'react';
import styled from 'styled-components';

const styledDiv = `
  width: 100px,
  height: 100px,
`

export NoteView = props => (
  <div>
    <h2>{props.note.title}</h2>
    {props.note.textBody}
  </div>
)

export default NoteView