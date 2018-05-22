import React from "react";
import Note from "./Note.js";
import { Route, Link } from "react-router-dom";

const NotesList = props => {
    return (
        <div className="notes-list">
            {props.notes.map(note => {
                return (
                    <Link to={`/note/${note.id}`} key={note.id}><Note note={note}/></Link>
                );
            })}
            <Route path="/note/:id" component={Note}/>
        </div>    
    );
}

export default NotesList;