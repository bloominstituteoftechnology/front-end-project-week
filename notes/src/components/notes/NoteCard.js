import React from "react"
import {Link} from "react-router-dom";

import styled from 'styled-components';

const Notes = styled.div`
display: table;
    table-layout: fixed;
    width: 100%;
    white-space: nowrap;
`; 
 const NoteCard = (props) => {

   return (
     <Notes>
      <Link to={`/note/${props.note._id}`} className="note">
            <h3>{props.note.title}</h3>
            <div></div>
            <p>{props.note.textBody}</p>
      </Link>
      </Notes>
   )
}
 export default NoteCard 