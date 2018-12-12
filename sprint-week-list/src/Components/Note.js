import React from 'react';
import {Link} from 'react-router-dom';

import styles from '../css/Note.css';

const Note = (props) =>{   
    
        return(
            <div className = 'note-container'>
                <Link  className = 'link' exact to= {`/notes/${props.id}`}>
                    <h2 className = 'note-header'>{props.title}</h2>
                </Link>  
                <p className = 'note-text'>{props.textBody}</p>
            </div>
        )
    
      
}

export default Note;