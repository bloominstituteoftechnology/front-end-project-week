import React from 'react';
import { Link } from 'react-router-dom';


const NoteCard = (props) => {
    return(
        <div className="Note">
            <h3><Link to={`notes/${props.params._id}`}>{props.params.title}</Link></h3>
            <p><Link to={`notes/${props.params._id}`}>{props.params.textBody}</Link></p>
        </div> 
    )
} 

export default NoteCard;
