import React from 'react';
import {Link} from 'react-router-dom';

const NoteContainer = props => {
     return(
         <div>
             <Link to ={`/view-note/${props.id}`}>
             <h3>{props.title}</h3>
             <p>{props.body}</p>
             </Link>
             
         </div>
     )
}

export default NoteContainer;