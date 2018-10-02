import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import Note from './Note';
import './Notes.css';

const Notes = (props) => {

    return(
        <Fragment>
        <div className="all-notes">
            <h2>Your Notes:</h2>
            {props.notes.map(note => {
                return(
                <Link className="link" to={`/note/${note._id}`} key={note._id}>       
                <Note 
                noteTitle ={note.title}
                noteBody={note.textBody} 
                note={note}
                />
                </Link>
                )
            })}
        </div>
        </Fragment>
    )
}



export default Notes;