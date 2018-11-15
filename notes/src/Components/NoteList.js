//pass notes via state and display all
//view notes button routes here
//create styled components doc for buttons and form input boxes
import React from "react";
import Note from "./Note";
import {DisplayHeader} from "../Styles/Styles"

const NoteList = (props) => {
   return(
      <>
         <DisplayHeader>Your Notes:</DisplayHeader>
         {props.notes.length < 1 ? <div>There are no notes!</div> : props.notes.map(note => 
            <Note 
               key={note._id}
               note={note}
            />)
         }
      </>
   )
}

export default NoteList