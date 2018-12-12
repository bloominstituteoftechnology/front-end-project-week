

//== Note ======================================================================

//-- Dependencies --------------------------------
import React from 'react';
import {Link} from 'react-router-dom';

//-- Component & Export --------------------------
export default function Note(props) {
    let viewUrl = `/edit/${props.note.id}`;
    return (
        <Link to={viewUrl}>
            <div className='note' data-id={props.note.id}>
                <h3>{props.note.title}</h3>
                <hr />
                <p>{props.note.body}</p>
            </div>
        </Link>
    );
}
