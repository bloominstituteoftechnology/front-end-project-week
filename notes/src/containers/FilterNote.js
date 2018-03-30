import { connect } from 'react-redux';
import ViewNote from '../components/ViewNote';

// need to take notes and filter note.id = {match}
const filterNote = (notes, { match }) => {
  // getPath();
  console.log(match.params.id);
  console.log(notes[match.params.id]);
  return notes[match.params.id];
}

const mapStateToProps = (state, { match }) => ({
  note: filterNote(state.notes, { match })
});

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   onClick: () => dispatch(editNote(ADDINPROPS))
// });

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(ViewNote)