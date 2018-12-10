import React from 'react';
import NoteSticky from './NoteSticky';
import styled from 'styled-components';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivListNotesPage = styled.div``;
const DivListNotesBoard = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const ListNotes = props => {
  console.log(props);
  return (
    <DivListNotesPage>
      {props.fetchingNotes ? <h2>Loading Notes...</h2> : null}
      <DivListNotesBoard>
        {props.notes.map(note => {
          console.log(note);
          return (
            <NoteSticky
              id={note._id}
              title={note.title}
              textBody={note.textBody}
            />
          );
        })}
      </DivListNotesBoard>
    </DivListNotesPage>
  );
};

export default ListNotes;
