// importing libraries
import React from 'react';
import { connect } from 'react-redux';


// import actions creators
import {
  addNote,
  updateNote,
} from '../store/actions';

// importing components
import NotesForm from '../components/NotesForm';

const FormView = (props) => {
  return (
    <NotesForm {...props}/>
  );
}

export default connect(
  state => ({
    notes: state,
  }),
  {
    addNote,
    updateNote,
  }
)(FormView)