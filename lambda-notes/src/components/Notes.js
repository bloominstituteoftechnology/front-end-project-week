import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import Note from './Note';
import './Notes.css';



const Notes = (props) => {
    return(
        <Fragment>
        <div className="all-notes">
            <div>
                <h2>Your Notes</h2>
            </div>
            <div>
                {props.notes.map((note) => {
                    return(
                    <Link className="link" to={`/note/${note.id}`} key={note.id}>       
                    <Note 
                    noteTitle ={note.title}
                    noteBody={note.body} 
                    id={note.id}
                    note={note}
                    />
                    </Link>
                    )
                })}
            </div>
        </div>
        </Fragment>
    )
}


 export default Notes;