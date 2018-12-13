import React from "react";
import NoteView from './noteView';
import Form from './form';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './navBar';

const ContainerDiv= styled.div`
width: 1024px;
margin: 0 auto;
display: flex;
background-color: #D3D2D3;
box-sizing: border-box;
`
const UlDiv= styled.div `
width: 75%;
display: flex;
flex-wrap: wrap;
background-color: #F2F1F2
padding: 4%;
justify-content: space-between;
`
const StyledNavBar= styled(NavBar)`
height: 100%;
flex: 1;
`
const PDiv=styled.p `
width:100%;
color: black;
font-weight: bold;
font-size: 24px;
`

const FullView = props => {
    return (
      <ContainerDiv>
        <NavBar/>
        <UlDiv>
         <PDiv> Your Notes:</PDiv>
          {props.notes.map(note => {
            return <NoteView key={note._id} note={note} handleDelete={props.handleDelete} />;
          })}
        </UlDiv>
        {/* <Form handleChanges= {props.handleChanges}
              addNewNote={props.addNewNote} */}
      </ContainerDiv>
    );
  };
  
  export default FullView;