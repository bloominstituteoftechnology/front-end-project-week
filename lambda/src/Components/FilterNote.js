import { connect } from 'react-redux';
import { deleteNote } from '../Actions/Notes.js';
import { editNote } from '../Actions/Notes.js'
import ViewNote from './ViewNote.js';

const filterNote = (notes, { match }) => {
  return notes[match.params.id];
}

const mapStateToProps = (state, { match }) => ({
  note: filterNote(state.notes, { match })
});

const mapDispatchToProps = (dispatch) => ({
  deleteNote: id => dispatch(deleteNote(id)),
  editNote: (id, title, content) => dispatch(editNote(id, title, content))
});

export default connect(  mapStateToProps, mapDispatchToProps)(ViewNote)