import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NoteTextContainer = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const NoteListHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const NoteListText = styled.h4`
  color: #414141;
  width: 50%;
  text-align: left;
  margin: 30px 5%;
`;

const NoteListSearch = styled.input`
  width: 300px;
  height: 30px;
  padding-left: 10px;
  border: 2px solid #a6a6a6;
  
`;

const NoteListMessage = styled.h4`
  color: #414141;
`;

const NotesListAttrib = styled.div`
  width: 75%;
  background: #f2f1f2;
  height: 100vh;
  border: 2px solid #56aaad;
  border-left: 0;
`;
const NoteCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 30px;
`;

const NoteCard = styled.div`
  width: 200px;
  margin: 10px 10px;
  height: 200px;
  text-decoration: none;
  border: 2px solid #a6a6a6;
  background: white;
  &:hover {
    background: gray;
    color: #000;
    box-shadow: 0 0 20px aqua;
  }
`;

const Line = styled.hr`
  width: 80%;
  background: #a6a6a6;
  margin: 0 auto;
`;

const NoteTitle = styled.h5`
  text-decoration: none;
  color: black;
  text-align: left;
  margin: 8px 20px 5px;
  vertical-align: center;
`;

const NoteContent = styled.p`
  text-decoration: none;
  color: black;
  margin: 5px 20px;
  text-align: left;
  word-wrap: break-word;
`;

const NotesList = props => {
  const searchItem = props.notes.filter((note) => {
    console.log(note.note)
  return note.note.toLowerCase().indexOf(props.input.toLowerCase()) !== -1
  });
  return (
    <NotesListAttrib>
      <NoteListHeader>
        <NoteListText>Your Notes:</NoteListText>
        <NoteListSearch
          placeholder="Search"
          type="text"
          name="input"
          value={props.input}
          onChange={props.handleSearchChange}
        />
      </NoteListHeader>

      {props.notes.length === 0 ? (
        <NoteTextContainer>
          <NoteListMessage>No notes are available...</NoteListMessage>
          <NoteListMessage>Please create a new note.</NoteListMessage>
        </NoteTextContainer>
      ) : (
        <NoteCardContainer>
          {searchItem.map(note => (
            <Link
              to={`/note/${note.id}`}
              key={note.id}
              style={{ textDecoration: "none" }}
            >
              <NoteCard key={note.id}>
                <NoteTitle>{note.title}</NoteTitle>
                <Line />
                <NoteContent>
                  {note.note.length >= 100
                    ? note.note.substring(0, 100) + "..."
                    : note.note}
                </NoteContent>
              </NoteCard>
            </Link>
          ))}
        </NoteCardContainer>
      )}
    </NotesListAttrib>
  );
};

export default NotesList;
