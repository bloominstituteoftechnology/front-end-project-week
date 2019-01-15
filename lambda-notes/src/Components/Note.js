
import React from "react"
import {Link} from "react-router-dom"

import '../index.css';

const Note = (props) => {
   return (
   <div className="Notes">
   <Link to={`/note/${props.note._id}`}>
         <h3>{props.note.title}</h3>
         <hr />
         <p>{props.note.textBody}</p>
   </Link>
   </div>
   )
}

export default Note