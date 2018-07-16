import React from 'react'
import styled from 'styled-components';
import NotePreview from './NotePreview';

const NoteGrid = styled.div`
  .notePreviewsContainer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default (props) => {
  let notes = props.notes.map(note => <NotePreview key={note["_id"]} note={note} />)
  return (
    <NoteGrid>
      <h1>Lambda Notes</h1>
      <div className="notePreviewsContainer">
        {notes}
      </div>
    </NoteGrid>
  )
}
