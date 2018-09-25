import React, {  } from 'react';
 import {  Link } from "react-router-dom";
 
 export const NoteList = props => {
     return (
         <div className="Container YourNotes">
             <h3 className="Header">Your Notes:</h3>
             <div className="noteList">
             {props.notes.map(note => {
             return ( 
                 <Link to={`/notes/${note.id}`} key={note.id} >
                     <div 
                         title={note.title}
                         text={note.text}
                        key={note.id}
                        className="SingleNote"
                    >
                        <h3 className="note-title">{note.title}</h3>
                    {note.text}
                    </div>
               </Link>
             );
           })}
           </div>
         </div>
     )
 }

export default NoteList;