import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

  

const Note = (props) =>{
    return(
    <Fragment>       
    <div className="single-note">
        <h3 className="text">{props.noteTitle}</h3>
        <div>
            <p className="text">{props.noteBody}</p>
        </div>
    </div>
    </Fragment>
    )
}

export default Note;

