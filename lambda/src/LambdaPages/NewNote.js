import React from 'react';
import NavBar from '../components/Nav';
import Form from '../components/Form';

//Statless component that renders Navbar from components file 
//and will render form for new note
const NewNote = (props) => {
    console.log("Note Param", props)
    return(
        <Form renderNoteList={props.renderNoteList}/>
    );
}

export default NewNote;