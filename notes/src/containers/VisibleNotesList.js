import { connect } from 'react-redux';
import NotesList from '../components/NotesList';
import { withRouter } from 'react-router-dom';
// Redux can sometimes block updates. Necessary in this case?
// https://reacttraining.com/react-router/core/guides/redux-integration

const getVisibleNotes = (notes) => {
  return notes;
};

const mapStateToProps = state => ({
  notes: getVisibleNotes(state.notes)
});

export default withRouter(connect(
  mapStateToProps
)(NotesList))