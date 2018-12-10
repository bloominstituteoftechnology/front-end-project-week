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
      <DivListNotesBoard>
        {props.notes.map(note => {
          console.log(note);
          return (
            <NoteSticky
              id={note._id}
              title={note.title}
              textBody={note.textBody}
              noteDetailsLink={`${props.urlLinks.home}${
                props.urlLinks.readNote
              }/${note._id}`}
            />
          );
        })}
      </DivListNotesBoard>
    </DivListNotesPage>
  );
};

export default ListNotes;
