import React from 'react';
import MDReactComponent from 'markdown-react-js';



const NotePreview = props => {
  const body = props.note.textBody;
  return (
    <div className='note-preview'>
    <h4>{props.note.title}</h4>
    <MDReactComponent text={body} />
    </div>
  )
}

export default NotePreview;
