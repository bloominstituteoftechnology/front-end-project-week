// importing libraries
import React from 'react';
import styled from 'styled-components';

// importing helper function
import { truncate } from '../../helper/helper';

// styled Card
const Card = styled.div`
  border: 1px solid #414141;
  overflow-wrap:break-word;
  margin: 2rem;
  font-size: 1.6rem;
  background-color: #FFFFFF;
  padding: 1.5rem;
  width: 25rem;
  min-height: 25rem;
  cursor: pointer;

  h3 {
    font-size: 2.2rem;
    font-weigth: bold;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #414141;
  }
`;

const NoteCard = ({note, history}) => {
  return (
    <Card
      draggable
      className="note-item"
      key={note._id}
      id={note._id}
      onClick = { () => {
        history.push(`/notes/${note._id}`)
      }}
    >
      <h3>{truncate(note.title, 15)}</h3>
      <p>{truncate(note.textBody, 200)}</p>
    </Card>
  );
}

export default NoteCard;