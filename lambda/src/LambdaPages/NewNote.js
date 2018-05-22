import React from 'react';
import NavBar from '../components/Nav';
import Form from '../components/Form';

//Statless component that renders Navbar from components file 
//and will render form for new note
const NewNote = () => {
    return(
        <div>
            <NavBar/>
            <Form/>
        </div>
    );
}

export default NewNote;