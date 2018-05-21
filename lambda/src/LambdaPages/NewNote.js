import React from 'react';
import NavBar from '../components/Nav';

//Statless component that renders Navbar from components file 
//and wil render form for new note
const NewNote = () => {
    return(
        <div>
            <NavBar/>
            <input type="text" placeholder="New Note"/>
        </div>
    );
}

export default NewNote;