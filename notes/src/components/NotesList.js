// importing libraries
import React from 'react';
import styled from 'styled-components';

import { truncate } from '../helper/helper';

// styled Notes List
const NotesWrapper = styled.div`
  padding: 4rem 4rem;

  h2 {
    font-size: 3rem;
    margin-bottom: 4rem;
  }
  
  .notes {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    .note-item {
      border: 1px solid #414141;
      margin: 2rem;
      font-size: 1.6rem;
      background-color: #FFFFFF;
      padding: 1.5rem;
      width: 25rem;
      height: 25rem;

      h3 {
        font-size: 2.2rem;
        font-weigth: bold;
        margin-bottom: 2rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid #414141;
      }
    }
  }
`;


const NotesList = ({notes, history}) => {
  return (
    <NotesWrapper>
      <h2>Notes:</h2>
      <div className="notes">
        {
          notes.map(note => (
            <div
              className="note-item"
              key={note._id}
              onClick = { () => {
                history.push(`/notes/${note._id}`)
              }}
            >
              <h3>{truncate(note.title, 15)}</h3>
              <p>{truncate(note.textBody, 200)}</p>
            </div>
          ))
        }
      </div>
    </NotesWrapper>
  );
}
 
export default NotesList;