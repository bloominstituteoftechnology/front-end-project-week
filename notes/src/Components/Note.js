import React from "react"
import {NoteContainer} from "../Styles/Styles"

const Note = (props) => {
   return (
      <NoteContainer>
         <h3>{props.note.title}</h3>
         <hr/>
         <p>{props.note.textBody}</p>
      </NoteContainer>
   )
}

export default Note