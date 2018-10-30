

//== Smurf =====================================================================

//-- Dependencies --------------------------------
import React from "react";

//-- Component & Export --------------------------
export default function Note(props) {
    return (
        <div className='note' onClick={props.onClick} data-id={props.note._id}>
            <h3>{props.note.title}</h3>
            <hr />
            <p>{props.note.textBody}</p>
        </div>
    );
}
