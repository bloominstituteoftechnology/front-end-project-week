import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';


const Note = (props) =>{
    return(
    <Fragment>       
    <div className="single-note">
        <h3>{props.noteTitle}</h3>
        <hr/>
        <p>{props.noteBody}</p>
    </div>
    </Fragment>
    )
}

export default Note;

