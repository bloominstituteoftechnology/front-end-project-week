import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const View = styled.div`
width: 640px; 
border: 1px solid black; 
height: 100%; 
position: fixed; 
background: #FAFBFC; 
display: flex; 
justify-content: center; 
`

const Container = styled.div`
width: 500px; 
height: auto; 
border: 1px solid blue; 
`

const Edit = styled.div`
display:flex; 
justify-content: flex-end;
`



const ViewNote = styled.div`
font-size: 15px; 
margin: 10px; 
`
const NoteTitle = styled.div`
font-size: 25px; 
margin: 10px
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
      <NavLink  to={`/view/edit${note.id}`}>
    Edit
    </NavLink>
    <NavLink  to={`/view/delete${note.id}`}>
    Delete
    </NavLink>
    </Edit>
      <ViewNote>View Note</ViewNote>
      <NoteTitle>{note.title}</NoteTitle>
      <Content>{note.content}</Content>
      </Container>
    </View>
  );
};
export default SingleNote;