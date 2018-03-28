import { connect } from 'react-redux';
import NotesList from '../components/NotesList';

const getVisibleNotes = (notes) => {
  return notes;
};

const mapStateToProps = state => ({
  notes: getVisibleNotes(state.notes)
});

export default connect(
  mapStateToProps
)(NotesList)