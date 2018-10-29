import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchNotes } from "../actions";
import Note from "./Note";

const NoteList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

class ListView extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    return (
      <div>
        <h3>Your Notes:</h3>
        <div className={this.props.gettingNotes ? "" : "none"}>
          <h3>Fetching Notes</h3>
        </div>
        <NoteList>
          {this.props.notes.map(note => (
            <Note key={note._id} note={note} />
          ))}
        </NoteList>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    gettingNotes: state.gettingNotes,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchNotes }
)(ListView);
