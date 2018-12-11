import React, { Component } from 'react';
import './Note.css';
import Note from './Note';

function Notes(props) {
    console.log(props.notes)
    
    function routeToNote(ev, note) {
        ev.preventDefault();
        console.log(note._id);
        props.history.push(`/notes/${note._id}`);
        props.getNoteById(note._id);
        console.log(note._id);
        
    }
    return (
        <div className = "deez-notes">
            <h1>Deez Notes</h1>
                    <div className="notes">
                        {props.notes.map(note => {
                            console.log(note._id);
                            return (
                                <div className = "mapped-notes" onClick={ev => routeToNote(ev, note)}>
                                    <h2>{note.tags}</h2>
                                    <h3>{note.title}</h3>
                        
                                    <hr/>
                                    <p>{note.textBody}</p>
                                </div>
                            )
                        })}
                    </div>
        </div>
                )
            }
       

export default Notes;


                    // <Note 
                    
                    
                    // tags={note.tags}
                    // id={note._id}
                    // title={note.title}
                    // textBody={note.textBody}
                    // key={note._id}
                    // />