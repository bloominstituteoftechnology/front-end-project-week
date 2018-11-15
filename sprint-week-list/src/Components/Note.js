import React from 'react';
import {Link} from 'react-router-dom';

const Note = (props) =>{   
    
        return(
            <div className = 'note-container'>
                <Link  to={`/notes/${props.id}`}>
                    <h2>{props.title}</h2>
                </Link>  
                <p>{props.textBody}</p>
            </div>
        )
    
      
}

export default Note;