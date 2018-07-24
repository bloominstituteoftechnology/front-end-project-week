import React from 'react';
import { Link } from 'react-router-dom'

const Note = ({id, title, textBody}) => {
  return ( 
    <div>
      <Link to={`/note/${id}`}>
        <h3>{title}</h3>
      </Link>
      <p>{textBody}</p>
    </div>
   );
}
 
export default Note;