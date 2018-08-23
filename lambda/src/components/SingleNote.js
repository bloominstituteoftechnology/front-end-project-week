import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../Delete.css'


const View = styled.div`
background: #F0F0F0;
width: 917px;
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
color: #2F4F4F;
`

const NoteTitle = styled.div`
margin: 10px; 
`
const Content = styled.div`
font-size: 15px; 
margin: 10px; 
`
const DeleteBox = styled.div`
margin-top: 20%;
margin-left: 40%;
display: flex;
flex-direction: column;
align-items: center;
height: 175px;
width: 500px;
background: white;
border: solid 1px gray;
color: #2F4F4F;
`
const Button = styled.button`
background: #1E90FF;
color: white;
font-size: 1rem;
font-weight: 700;
text-align: center;
width: 200px;
padding: 0.5rem 1rem;
margin: 2%;
cursor:pointer;
`
const OtherButton = styled.div`
background: red;
color: white;
font-size: 1rem;
font-weight: 700;
text-align: center;
width: 170px;
padding: 0.5rem 1rem;
margin: 2%;
cursor:pointer;
`
const OptionButton = styled.div`
background: #F0F0F0;
color: #2F4F4F;
font-size: 1rem;
font-weight: 700;
text-align: center;
width: 20px;
padding: 0.5rem 1rem;
margin: 2%;
cursor:pointer;
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
    <div className={props.deleting ? "delete" : "hide-delete"}>
        <DeleteBox>
          <p>Are you sure you want to delete this?</p>
          <div>
            <Link to="/">
              <Button
                onClick={() => props.deleteNote(props.match.params.id)}>
                Delete
              </Button>
            </Link>
            <Link to = {`/view/${note.id}`}>
            <OtherButton onClick={props.deleteNote}>
              No
            </OtherButton>
            </Link>
          </div>
        </DeleteBox>
      </div>
    <Edit>
      <NavLink  onClick={() => props.noteEdit(note.id)}  to={`/view/edit/${note.id}`} 
      style={{'text-decoration': 'none'}}>
    <OptionButton>Edit</OptionButton>
    </NavLink>
    <NavLink  to={`/view/${note.id}`} onClick={props.deleteBox} 
    style={{'text-decoration': 'none'}}>
    <OptionButton>Delete</OptionButton>
    </NavLink>
    </Edit>
      
      <NoteTitle><h2>{note.title}</h2></NoteTitle>
      <Content>{note.content}</Content>
      </Container>
    </View>
  );
};
export default SingleNote;