import React from 'react';
import styled from 'styled-components';

export NoteView = props => (
  <div className='container' >
    <h2>{props.note.title}</h2>
    {props.note.textBody}
  </div>
)

export default NoteView