import React from 'react';
import { connect } from 'react-redux';
import { getNotes } from '../actions';

const SingleNote = props => {

  //

  return (
    <div className='single-note-container'>
      {/* <li onClick={() => this.handleShowNote(props.note)} key={props.note.id}>{props.note.title}</li>
      <li>{props.note.textBody}</li> */}
      <li className='note-title' onClick={() => this.handleShowNote({})} key={props.note.id} >{props.note.title}</li>
      <li className='note-content'>{props.note.textBody}</li>
    </div> 
  )
}

export default SingleNote;
// export default connect( {getNotes} )(SingleNote);