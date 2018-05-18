import React from 'react';
import { connect } from 'react-redux';
import { getNoteForm } from '../actions';

const Toolbar = ({ getNoteForm }) => 
  <div>
      <h3>Lambda Note</h3>
      <button onClick={console.log('')}>View Your Notes</button>
      <button onClick={() => getNoteForm() }>+ Create New Note</button>
  </div>

export default connect(null, { getNoteForm })(Toolbar);