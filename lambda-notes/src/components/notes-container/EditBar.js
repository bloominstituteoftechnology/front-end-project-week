//rendered by SingleNote component
//a component that links to options for editing or deleting a note
import React from 'react';
import { Link } from 'react-router-dom';



const EditBar = props => {
    return (
    <div>
    <Link to={`/EditNoteForm/${props.id}`}>edit</Link>
    <Link to='/' onClick={event => props.deleteNote(event,props.id)}>delete</Link>
    </div>
    //'deleteNote' function lives in app.js
    );
}
export default EditBar

