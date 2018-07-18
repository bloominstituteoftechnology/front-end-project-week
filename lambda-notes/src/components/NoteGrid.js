import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NotePreview from './NotePreview';

const StyledNoteGrid = styled.div`
  padding: ${props => props.theme.dimensions.noteGrid.padding};
  h1 {
    margin: ${props => props.theme.dimensions.noteGrid.headingMargin};
  }

  .notePreviewsContainer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: ${props => props.theme.dimensions.noteGrid.gridGap};
    padding: ${props => props.theme.dimensions.noteGrid.gridPadding};

    a,
    a:link,
    a:visited,
    a:hover,
    a:active {
      color: inherit;
      text-decoration: inherit;
      font-weight: inherit;
    }
  }
`;

export default class NoteGrid extends Component {
  render() {
    let { notes } = this.props;
    notes = notes.map(note => (
      <Link key={note['_id']} to={`/view/${note['_id']}`}>
        <NotePreview note={note} />
      </Link>
    ));

    return (
      <StyledNoteGrid>
        <h1>Your Notes:</h1>
        <div className="notePreviewsContainer">{notes}</div>
      </StyledNoteGrid>
    );
  }
}
