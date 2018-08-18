import React, { Fragment } from "react";
import findNote from "../selectors";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import Note from "../components/Note";
import { getNote } from "../actions";
import { StyledContainer } from '../styled-components/container-styles';

class NoteContainer extends React.Component {
  componentDidMount() {
    this.props.getNote(this.props.match.params.id);
  }
  render() {
    return (
      <StyledContainer>
        {this.props.isFetching ? (
          <p> gettin dat note </p>
        ) : (
          <Fragment>
          <div>
            <Link to={`/edit/${this.props.match.params.id}`}>
              Edit
            </Link>
          </div>
          <Note note={this.props.note} />
          </Fragment>
        )}
      </StyledContainer>
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
