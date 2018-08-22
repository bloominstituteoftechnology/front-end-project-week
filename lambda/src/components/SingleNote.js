import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const View = styled.div`
background: #F0F0F0;
width: 820px;
height: 775px;
flex-direction: column;
display: flex;
padding: 1%;
`

const Container = styled.div`
backgr
width: 700px;
height: 500px;
padding: 1%;
margin: 2%;
`

const Edit = styled.div`
display:flex; 
justify-content: flex-end;
`

const NoteTitle = styled.div`
margin: 10px; 
`
const Content = styled.div`
font-size: 15px; 
margin: 10px; 
`



const SingleNote = props => {
    console.log(props)
  const note = props.notes.find(note => `${note.id}` === props.match.params.id);
  if(!note ){
      return null
  }
  return (
    <View>
    <Container>
    <Edit>
      <NavLink  onClick={() => props.noteEdit(note.id)}  to={`/view/edit/${note.id}`}>
    Edit
    </NavLink>
    <NavLink  to={`/view/delete/${note.id}`}>
    Delete
    </NavLink>
    </Edit>
      
      <NoteTitle><h2>{note.title}</h2></NoteTitle>
      <Content>{note.content}</Content>
      </Container>
    </View>
  );
};
export default SingleNote;