import React from "react"
import {Link} from "react-router-dom";
// import {NoteContainer} from "../Styles/Styles"
 const NoteCard = (props) => {
   console.log(props.note._id)
   return (
      <Link to={`/note/${props.note._id}`} className="note">
            <h3>{props.note.title}</h3>
            <div></div>
            <p>{props.note.textBody}</p>
      </Link>
   )
}
 export default NoteCard 