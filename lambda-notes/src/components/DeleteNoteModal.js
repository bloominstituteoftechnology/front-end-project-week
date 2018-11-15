import React from 'react';

const DeleteNoteModal = props=>{

    function handleDelete(){
        props.deleteNote(true);
    }

    function handleNo(){
        props.deleteNote(false);
    }

    return(
        <div>
            <p>Are you sure you want to delete this?</p>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleNo}>No</button>
        </div>
    )
}

export default DeleteNoteModal;