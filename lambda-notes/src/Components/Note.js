
import React from "react"
import { Link } from "react-router-dom"

import '../index.css';

const Note = (props) => {
   return (
  <Link to={`/note/${props.note._id}`} className="Notes">
         <h3>{props.note.title}</h3>
         <hr />
         <p>{props.note.textBody}</p>
   </Link>
   )
}

export default Note