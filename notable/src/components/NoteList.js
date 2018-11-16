import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { fetchNotes, fetchSingleNote } from "../actions/index";
import NoteCard from "./NoteCard";

const ListDiv = styled.div`
  h1 {
    font-size: 1.8rem;
    padding: 60px 5% 20px;
  }
`;

const CardDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

class NoteList extends React.Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  gotoSingleNote = id => {
    this.props.fetchSingleNote(id);
    this.props.history.push(`/note/${id}`);
  }

  render() {
    return (
      <ListDiv>
        <h1>Your Notes:</h1>
        {this.props.fetching ? (
          <h1>Please Wait</h1>
        ) : (
          <CardDiv>
            {this.props.notes.map(item => {
              return <NoteCard key={`${item._id}`} note={item} gotoSingleNote={this.gotoSingleNote} />;
            })}
          </CardDiv>
        )}
      </ListDiv>
    );
  }
}

const mapStateToProps = state => {
  return { notes: state.notes, fetching: state.fetching };
};

export default connect(
  mapStateToProps,
  { fetchNotes, fetchSingleNote }
)(NoteList);
