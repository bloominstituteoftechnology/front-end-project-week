import React, { Component } from 'react';
import {  Link } from "react-router-dom";

export const NoteList = props => {
    return (
        <div className="notes-wrap" >
            <h3 className="your-header" >Your Notes:</h3>
            {props.notes.map(note => {
            return ( 
                <Link to={`/notes/${note.id}`} >
                    <div 
                        title={note.title}
                        text={note.text}
                        key={note.id}
                        className="note-wrap"
                    >
                        <h3>{note.title}</h3>
                        <hr/>
                    {note.text}
                    </div>
              </Link>
            );
          })}
        </div>
    )
}