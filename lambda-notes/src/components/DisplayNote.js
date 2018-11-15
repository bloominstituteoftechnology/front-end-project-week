import React from 'react';

import {EDIT} from '../App';

const DisplayNote = props=>{

    function editNote(){
        props.setAppState(EDIT);
    }

    function deleteNote(){
        props.deleteNote(props.note._id);
    }

    if(!props.note){
        return <div>Loading data...</div>
    }

    return(
        <div>
            <button onClick={editNote}>edit</button>
            <button onClick={deleteNote}>delete</button>
            <h3>{props.note.title}</h3>
            <p>{props.note.textBody}</p>
        </div>
    )
}

export default DisplayNote;