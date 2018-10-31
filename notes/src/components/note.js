

//== Note ======================================================================

//-- Dependencies --------------------------------
import React from 'react';
import {Link} from 'react-router-dom';

//-- Component & Export --------------------------
export default function Note(props) {
    let viewUrl = `/note/${props.note._id}`;
    return (
        <Link to={viewUrl}>
            <div className='note' onClick={props.onClick} data-id={props.note._id}>
                <h3>{props.note.title}</h3>
                <hr />
                <p>{props.note.textBody}</p>
            </div>
        </Link>
    );
}
