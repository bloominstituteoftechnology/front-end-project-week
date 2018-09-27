import React from "react"; 
import styled from "styled-components";
import NoteSearch from './noteSearch';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  min-height: 100vh;
  width: 80%;
  height: auto;
  background-color: #f2f0f2;
`;
const NotesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  min-height: auto;
  width: 100%;
  height: auto;
  background-color: #f2f0f2;
`;

const NotesContainerH2 = styled.h2`
  display:inline;
  font-size: 1.5em;
  width: 30%;
  font-weight: bold;
  padding-left: 3%;
  padding-top: 50px;
  @media(max-width:770px){
    width:45%;
  
  }
`;

const NotesListView = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 30%;
  border-radius: 5px;
  height: 200px;
  margin: 15px 0;
  text-align: left;
  word-wrap: break-word;
  background-color: #ffffff;
  overflow: hidden;
`;

const NoteTitle = styled.h4`
  font-weight: bold;
  border-bottom: 1px solid #d0d0d0;
  width: 90%;
  height:15%
  margin: 10px auto;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: baseline;
  &:Hover {
    cursor: pointer;
  }
`;

const NoteBody = styled.p`
  color: black;
  text-decoration: none;
  width: 90%;
  height: 85%;
  margin: 0 auto;
  overflow: hidden;
  white-space: normal;
  text-overflow: hidden;
  &:Hover {
    cursor: pointer;
  }
`;

const NotesSearchHeader = styled.div`
display: flex;
justify-content: flex-start;
width: 100%;
margin-bottom: 20px;
`;

const ListView = props => {
  return (
    <Container>
      <NotesSearchHeader>
      <NotesContainerH2>Your Notes:</NotesContainerH2>
      <NoteSearch {...props} searchPostsHandler={props.searchPostsHandler}/>
      </NotesSearchHeader>
      <NotesContainer>
      {props.notes.map(note => {
        return (
          <NotesListView key={note._id}>
            <NoteTitle onClick={() => props.history.push(`/notes/${note._id}`)}>
              {note.title}
            </NoteTitle>
            <NoteBody onClick={() => props.history.push(`/notes/${note._id}`)}>{note.textBody}</NoteBody>
          </NotesListView>
        );
      })}
      </NotesContainer>
    </Container>
  );
};

export default ListView;
