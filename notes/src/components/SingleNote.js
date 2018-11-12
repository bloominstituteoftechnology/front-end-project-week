import React from 'react';


const SingleNote = props => {

console.log(props.note)
  return (
    <div className='single-note-container'>
    {/* <Link to="/SingleNote" className='TITLE'>{props.note.title}</Link> */}
      <li onClick={() => props.editNoteHandler(props.note)} >{props.note.title}</li>
      {/* <li className='note-title' onClick={() => this.handleShowNote(props.note)} key={props.note.id} >{props.note.title}</li> */}
      <li className='note-content'>{props.note.textBody}</li>
    </div> 
  )
}

export default SingleNote;
