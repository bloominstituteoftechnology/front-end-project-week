import React from 'react';
import { connect } from 'react-redux';
import { getNotes } from '../actions';

const SingleNote = props => {

  //

  return (
    <div className='single-note-container'>
      <h3>Note Title (need to update for each note)</h3>
      <p>Note Content (need to update for each note). After reaching max length of ???? ends with ...</p>
      <li>I AM li</li>
      {/* <li>
        <h3>props.note.title</h3>
        <p>props.note.content</p>
      </li> */}
    </div> 
  )
}

export default SingleNote;
// export default connect( {getNotes} )(SingleNote);