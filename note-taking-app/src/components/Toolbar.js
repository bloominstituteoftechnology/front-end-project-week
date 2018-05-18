import React from 'react';
import { connect } from 'react-redux';
import { getCreateNoteForm } from '../actions';

const Toolbar = ({ getCreateNoteForm }) => 
  <div>
      <h3>Lambda Note</h3>
      <button onClick={console.log('')}>View Your Notes</button>
      <button onClick={() => getCreateNoteForm() }>+ Create New Note</button>
  </div>

export default connect(null, { getCreateNoteForm })(Toolbar);