
import React from "react"
import {Link} from "react-router-dom"

const Note = (props) => {
   return (

      <Link to={`/note/${props.note._id}`}>
         <h3>{props.note.title}</h3>
         <hr />
         <p>{props.note.textBody}</p>
      </Link>
   )
}

export default Note