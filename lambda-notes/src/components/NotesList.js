import React from "react";

import Note from "./Note";
import LoginRegister from './LoginRegister';


const NotesList = props => (
    <div>
    {props.isLoggedIn === true ?
        <div className="notes-list">
            <h3 className="your-notes">Your Notes:</h3>
            <div className="notes">
                {props.notes.map((note, index) => (
                    <Note note={note} key={index} /> 
                ))}
            </div>
        </div>
        : <LoginRegister/>
    }
    </div>
);

export default NotesList;