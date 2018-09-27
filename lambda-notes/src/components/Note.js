import React from 'react';
import {Link} from 'react-router-dom';


const Note = (props) =>{



    return(
       
    <div className="single-note">
        <h3 id ={props.id}>{props.noteTitle}</h3>
        <hr/>
        <p>{props.noteBody}</p>
    </div>
    )
}

export default Note;

