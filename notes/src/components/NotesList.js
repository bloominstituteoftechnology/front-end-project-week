import React from 'react';
import styled from 'styled-components';


const NoteCard = styled.div`
    border: 1px solid black;
    width: 200px;
    height: 100px;
    margin: 30px;
    padding: 20px;
`;

const NotesList = props => {
    return (
        <>
          {props.notes.map(note => (
            <NoteCard onClick={() => props.history.push(`/note/${note._id}`)} key={note._id}>
              <h3>{note.title}</h3>
              <p>${note.textBody}</p>
            </NoteCard>
          ))}
        </>
      );
}

export default NotesList;