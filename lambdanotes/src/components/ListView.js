import React from 'react';
import { Link } from 'react-router-dom';
import './ListView.css';


const ListView = props => {
    return (
        <div className= 'note-card-wrapper'>
            {
                (props.notesData.map( note => 
                    <div className= 'note-card'  >
                        <Link to={`${note._id}`} onClick={() => props.getCurrentNoteByID(note._id)}><h1>{note.title} </h1></Link>
                        <p>{note.textBody}</p>
                    </div>))
            }
        </div>
    )
}

export default ListView; 
      

     
