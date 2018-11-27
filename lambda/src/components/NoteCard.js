import React from 'react';
import { Link } from 'react-router-dom';

const NoteCard = props => {
    return(
        
        <Link to={`/view/${props.id}`} className={`${props.size}`}>
            <h2 className="card-title">{props.title}</h2>
            {/* <p>{props.textBody}</p> */}
            <p>{props.textBody.length > 200 ? `${props.textBody.substring(0,200)}...` : props.textBody}</p>
        </Link>
        
    );
}

export default NoteCard;