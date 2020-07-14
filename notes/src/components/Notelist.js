import React, { Component } from "react";
import styled from "styled-components";
import { Page, PageHeader } from "./styles";
// import { Link } from "react-router-dom";

import NoteCard from "./NoteCard";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 40px;
  margin: 20px 20px;
`;

class NoteList extends Component {
  state = {
    notes: this.props.notes,
  };
  render() {
    return (
      <Page>
        <PageHeader>Your Notes:</PageHeader>
        <Grid>
          {this.props.notes.map((note, index) => {
            return (
              <NoteCard
                key={`${note.title}${index}`}
                index={index}
                note={note}
              />
            );
          })}
        </Grid>
      </Page>
    );
  }
}

export default NoteList;
