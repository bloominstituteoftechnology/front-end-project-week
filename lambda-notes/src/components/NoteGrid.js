import React from 'react'
import styled from 'styled-components';
import NotePreview from './NotePreview';

const NoteGrid = styled.div`
  padding: ${ props => props.theme.dimensions.noteGrid.padding};
  background-color: ${ props => props.theme.color.mainPaneBG };
  border-style: solid;
  border-width: ${ props => props.theme.dimensions.noteGrid.borderWidth };
  border-color: ${ props => props.theme.color.border}
  
  h1 {
    font-size: ${ props => props.theme.dimensions.noteGrid.headingFontSize };
    font-family: ${ props => props.theme.font.heading };
    color: ${ props => props.theme.color.headingText};
    margin: ${ props => props.theme.dimensions.noteGrid.headingMargin};

  }
  
  .notePreviewsContainer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: ${ props => props.theme.dimensions.noteGrid.gridGap };
    padding: ${ props => props.theme.dimensions.noteGrid.gridPadding};
  }
`;

export default (props) => {
  let notes = props.notes.map(note => <NotePreview key={note["_id"]} note={note} />)
  return (
    <NoteGrid>
      <h1>Your Notes:</h1>
      <div className="notePreviewsContainer">
        {notes}
      </div>
    </NoteGrid>
  )
}
