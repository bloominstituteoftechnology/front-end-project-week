import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NoteSticky from './NoteSticky';

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
              title={note.title}
              textBody={note.textBody}
              noteDetailsIdLink={`${props.noteDetailsLink}/${note._id}`}
            />
          );
        })}
      </DivListNotesBoard>
    </DivListNotesPage>
  );
};

ListNotes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      tags: PropTypes.array,
      _id: PropTypes.string,
      title: PropTypes.string,
      textBody: PropTypes.string,
      __v: PropTypes.number
    })
  )
};

export default ListNotes;
