import { connect } from 'react-redux';
import NotesList from './Noteslist.js';
import { withRouter } from 'react-router-dom';

const getVisibleNotes = (notes) => {
  return notes;
};

const mapStateToProps = state => ({
  notes: getVisibleNotes(state.notes)
});

export default withRouter(connect( mapStateToProps )(NotesList))