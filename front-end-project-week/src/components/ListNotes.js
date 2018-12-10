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
  return (
    <DivListNotesPage>
      <DivListNotesBoard>
        {props.notes.map(note => {
          return (
            <NoteSticky
              key={note._id}
              id={note._id}
              title={note.title}
              textBody={note.textBody}
              noteDetailsLink={`${props.urlLinks.home}${
                props.urlLinks.readNoteClient
              }/${note._id}`}
            />
          );
        })}
      </DivListNotesBoard>
    </DivListNotesPage>
  );
};

export default ListNotes;
