import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { fetchNotes, fetchSingleNote, filterNotes } from "../actions/index";
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
  };

  filterOnTag = tag => {
    if (tag !== "ALL") {
      this.props.filterNotes(
        this.props.notes.filter(item => item.tags.includes(tag))
      );
    } else {
      this.props.filterNotes(this.props.notes);
    }
  };

  render() {
    return (
      <ListDiv>
        <h1>All Notes:</h1>
        {this.props.fetching(
          <div>
            <CardDiv>
              {this.props.filteredNotes.map(item => {
                  return (
                    <NoteCard
                      key={`${item.id}`}
                      note={item}
                      gotoSingleNote={this.gotoSingleNote}
                    />
                  );
                })
                .reverse()}
            </CardDiv>
          </div>
        )}
      </ListDiv>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    allTags: state.allTags,
    fetching: state.fetching,
    filteredNotes: state.filteredNotes
  };
};

export default connect(
  mapStateToProps,
  { fetchNotes, fetchSingleNote, filterNotes }
)(NoteList);