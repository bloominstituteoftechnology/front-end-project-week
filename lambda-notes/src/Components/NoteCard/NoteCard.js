import React from 'react';
import './NoteCard.css';


const NoteCards = props =>{
    console.log(props.notes)
    return(
        <div className = "main-container">
        {props.notes.map(note =>{
            return(
            <li key={note.id} className ="card-container">
                <div className="text-wrapper">
                    <h4 className="text-title">{note.note_title}</h4>
                    <hr />
                    <p className = "text-body">{note.note_body}</p>
                </div>
            </li>
            )
        })}
        </div>
    )
    

}
        


export default NoteCards;