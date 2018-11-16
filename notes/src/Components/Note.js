import React from "react"
import {Link} from "react-router-dom";
import {NoteContainer} from "../Styles/Styles"

const Note = (props) => {
   return (
         <NoteContainer>
            <Link to={`/note/${props.note._id}`}>
            <h3>{props.note.title}</h3>
            <hr/>
            <p>{props.note.textBody}</p>
            </Link>
         </NoteContainer>
   )
}

export default Note