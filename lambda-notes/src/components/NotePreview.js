import React from 'react';
import Markdown from 'markdown-to-jsx'



const NotePreview = props => {
  const body = props.note.textBody;
  return (
    <div className='note-preview'>
    <h4>{props.note.title}</h4>
      <Markdown>{body.replace(/'[ ]'/g, '<input type="checkbox" className="checkbox" value="on">') }</Markdown>
    </div>
  )
}

export default NotePreview;
