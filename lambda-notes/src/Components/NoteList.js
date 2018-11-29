import React from "react";
import Note from "./Note";

const NoteList = (props) => {
    return(
        <div>
            <h2>Your Notes:</h2>
            {props.notes.length < 1 ? <div>There are no notes!</div> : props.notes.map(note => 
            <Note 
               key={note._id}
               note={note}
            />)
         }
        </div>
    )
}

export default NoteList;