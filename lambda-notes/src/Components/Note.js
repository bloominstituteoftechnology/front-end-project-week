
import React from "react"
import {Notes} from "../Styles/Styles"

const Note = (props) => {
   return (
      <Notes href={`/note/${props.note._id}`}>
         <h3>{props.note.title}</h3>
         <hr />
         <p>{props.note.textBody}</p>
      </Notes>
   )
}

export default Note