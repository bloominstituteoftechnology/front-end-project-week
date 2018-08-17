import React from "react";
import findNote from "../selectors";
import { connect } from "react-redux";
import Note from "../components/Note";
import { getNote } from "../actions";

class NoteContainer extends React.Component {
  componentDidMount() {
    this.props.getNote(this.props.match.params.id);
  }
  render() {
    return (
      <div>
        {this.props.isFetching ? (
          <p> gettin dat note </p>
        ) : (
          <Note note={this.props.note} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  note: findNote(state.notesReducer.notes, ownProps.match.params.id),
  isFetching: state.notesReducer.fetchingNote,
});

export default connect(
  mapStateToProps,
  { getNote }
)(NoteContainer);
