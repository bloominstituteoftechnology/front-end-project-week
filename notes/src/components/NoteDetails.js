import React from 'react';


const NoteDetails = (props) => {
    console.log(props.notes);
    console.log(props.match.params.id);
    let currentNote = {};
    
    {props.notes.map(note => {
        if(note._id === props.match.params.id){
            console.log(note);
            currentNote = Object.assign({}, note);
        }
    })}
    

    return (
        <div>
            <h1>{currentNote.title}</h1>
            <p>{currentNote.textBody}</p>
            
        </div>
    )
}

export default NoteDetails;