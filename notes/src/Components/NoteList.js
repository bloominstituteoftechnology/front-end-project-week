//pass notes via state and display all
//view notes button routes here
//create styled components doc for buttons and form input boxes
import React from "react";
import Note from "./Note";

const NoteList = (props) => {
   console.log(props)
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

export default NoteList