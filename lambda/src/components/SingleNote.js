import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { Link } from 'react-router-dom';



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
const DeleteBox = styled.div`
margin-top: 20%;
margin-left: 3%;
display: flex;
flex-direction: column;
align-items: center;
height: 175px;
width: 500px;
background: white;
border: solid 1px gray;
color: gray;
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
              <div
                onClick={() => props.deleteNote(props.match.params.id)}>
                Delete
              </div>
            </Link>
            <div onClick={props.deleteModal}>
              No
            </div>
          </div>
        </DeleteBox>
      </div>
    <Edit>
      <NavLink  onClick={() => props.noteEdit(note.id)}  to={`/view/edit/${note.id}`}>
    Edit
    </NavLink>
    <NavLink  to={`/view-note/${note.id}`} className="ed" onClick={props.deleteBox}>
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