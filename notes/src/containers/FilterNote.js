import { connect } from 'react-redux';
import { deleteNote } from '../actions/notes';
import { editNote } from '../actions/notes';
import ViewNote from '../components/ViewNote';

// need to take notes and filter note.id = {match}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewNote)