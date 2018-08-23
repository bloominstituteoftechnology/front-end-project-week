import React, {  } from 'react';
import {  Link } from "react-router-dom";

export const NoteList = props => {
    return (
        <div className="notes-wrap" >
            <h3 className="your-header" >Your Notes:</h3>
            {props.notes.map(note => {
            return ( 
                <Link to={`/notes/${note.id}`} key={note.id} >
                    <div 
                        title={note.title}
                        text={note.text}
                        key={note.id}
                        className="note-wrap"
                    >
                        <h4 className="list-title" >{note.title}</h4>
                        <hr/>
                    {note.text}
                    </div>
              </Link>
            );
          })}
        </div>
    )
}