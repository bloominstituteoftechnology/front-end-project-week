import React from 'react';
import './NoteCard.css';
import SingleNoteCard from './SingleNoteCard';
import SingleNoteView from '../NoteView/SingleNoteView';
import { Link } from 'react-router-dom';


const NoteCards = props =>{
    console.log(props.notes)
    return(
        <div className = "main-container">
        {props.notes.map(note =>{
            return(
            <li key={note.id} className ="card-container">
                <div className="text-wrapper">
                    <h4 className="text-title">
                        <Link to= {`/notes/1`} component={SingleNoteView}>
                            {note.note_title}
                       </Link></h4>
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