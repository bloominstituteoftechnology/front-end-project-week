import React from 'react';
import { Route, Link } from 'react-router-dom';

const NoteCard = (props) => {
    return(
        <div className="Note">
            <h3><Link to={`notes/${props.id}`}>{props.title}</Link></h3>
            <p><Link to={`notes/${props.id}`}>{props.textBody}</Link></p>
            <Route path={`notes/${props.id}`} />
        </div>
    )
}

export default NoteCard;
