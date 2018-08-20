import React, { Fragment } from "react";
import { connect } from "react-redux";
import { fetchNotes } from "../actions";
import NoteList from "../components/NoteList";
import { StyledContainer } from '../styled-components/container-styles'; 

class NoteListContainer extends React.Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    return (
      <Fragment>
        {this.props.fetchingNotes ? (
          <p> ur notes b coming </p>
        ) : (
          <StyledContainer>
          <h4>Your Notes:</h4>
          <NoteList notes={this.props.notes} />
          </StyledContainer>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.notesReducer.notes,
  fetchingNotes: state.notesReducer.fetchingNotes,
});

export default connect(
  mapStateToProps,
  { fetchNotes }
)(NoteListContainer);
