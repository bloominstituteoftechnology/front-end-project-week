import React from 'react';
import styled from 'styled-components';

const 

export NoteView = props => (
  <div>
    <h2>{props.note.title}</h2>
    {props.note.textBody}
  </div>
)

export default NoteView