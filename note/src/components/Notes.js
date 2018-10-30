import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const NotesContainer = styled.div`
  border: 1px solid black;
  margin-left: 20%;
  height: 100%;
`;

 const Heading = styled.h2`
  display: flex;
  margin-left: 30px;
`;

 const NotesDisplay = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

 const NoteCard = styled.div`
  border: 1px solid gray;
  width: 225px;
  height: 200px;
  margin-left: 60px;
  margin-top: 30px;
`;

 const NoteTitle = styled.h3`
  border-bottom: 1px solid gray;
  display: flex;
  margin-left: 10px;
  margin-right: 10px;
  text-decoration: none;
  color: black;
`;

 const NoteBody = styled.p`
  display: flex;
  margin-left: 10px;
  margin-right: 10px;
  text-decoration: none;
  color: gray;
`;

const Notes = props =>  {
        return (
            <NotesContainer>
                <Heading>Your Notes:</Heading>
                <NotesDisplay>
                    {props.notes.map(note => {
                        return (
                            <Link to={`/note/${note._id}`}>
                            <NoteCard
                                key={note._id}
                                style={{ textDecoration: 'none' }}
                            >
                                <NoteTitle>
                                    {note.title.length >= 15
                                        ? note.title.substring(0, 15)+'...'
                                        : note.title
                                    }
                                </NoteTitle>
                                <NoteBody>
                                    {note.textBody.length >= 100
                                        ? note.textBody.substring(0, 100)+'...'
                                        :note.textBody
                                    }
                                </NoteBody>
                            </NoteCard>
                            </Link>
                        )
                    })}
                </NotesDisplay>
            </NotesContainer>
        )
    }

export default Notes;