// importing libraries
import React from 'react';
import { connect } from 'react-redux';


// import actions creators
import {
  addNote,
  getNote,
  updateNote,
} from '../store/actions';

// importing components
import NotesForm from '../components/NotesForm/NotesForm';

class FormView extends React.Component { 
  componentDidMount() {
    this.props.update && this.props.getNote(this.props.match.params._id);
  }
  render () {
    const { update, fetchingNote, note } = this.props;

    return (
      !update ?
        <NotesForm { ...this.props }/> :
        fetchingNote || !note ?
          <div>Fetching Friend...</div> :
          !note._id ?
            <div>Something has gone teribbly wrong.</div> :
            <NotesForm { ...this.props }/>
    );
}
}

export default connect(
  state => ({
    note: state.note,
    fetchingNote: state.fetchingNote,
    addingNote: state.addingNote,
    updatingNote: state.updatingNote,
    error: state.error,
  }),
  {
    addNote,
    getNote,
    updateNote,
  }
)(FormView)