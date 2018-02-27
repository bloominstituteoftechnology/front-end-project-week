import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

import './NoteView.css';

function NoteView(props) {

  return (
    <div className='note-view'>
    { props.current ?
    <div>
      <Link to={`/edit/${props.current.id}`} className='edit-button'>edit</Link>
      <Link to={`/delete/${props.current.id}`} className='delete-button'>delete</Link>
      <div className='note-title'>{props.current.title}</div>
      <div className='note-entry'>{props.current.entry}</div>
    </div>
    :
    <div>
      <Redirect to='/' />
    </div>
  }

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.current,
  }
}

export default connect(mapStateToProps)(NoteView);