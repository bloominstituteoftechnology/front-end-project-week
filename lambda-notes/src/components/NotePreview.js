import React from 'react';
import ReactMarkdown from 'react-markdown';



const NotePreview = props => {
  const body = props.note.textBody;
  return (
    <div className='note-preview'>
    <h4>{props.note.title}</h4>
    <ReactMarkdown source={body} />
    </div>
  )
}

export default NotePreview;
