import React from "react";
import Note from "./Note";
import {DisplayHeader} from "../Styles/Styles";

const NoteList = (props) => {
    return(
        <div>
            <DisplayHeader>Your Notes:</DisplayHeader>
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