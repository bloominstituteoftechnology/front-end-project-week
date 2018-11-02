import React from 'react';
import { connect } from 'react-redux';
import { getNotes } from '../actions';

const SingleNote = props => {

  //

  return (
    <div className='single-note-container'>
      <li>{props.note.title}</li>
      <li>{props.note.textBody}</li>
    </div> 
  )
}

export default SingleNote;
// export default connect( {getNotes} )(SingleNote);