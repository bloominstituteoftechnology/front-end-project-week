import React from 'react';
import '../App.css';
import Note from './Note'


const NoteList = props => {
    return (
        <div className="list-page">
        <div className="page-header">
        {/* This should also change when the page changes */}
            <h3>Your Notes:</h3>
        </div>
        
        <div className="note-list">
            
            {props.notes.map(notes => {
                return(
                    <Note 
                    key={notes.id}
    
                    tags={notes.tags}
                    title={notes.title}
                    textBody={notes.textBody}
                    />
                )
                
            })
            })}
            
        </div>
        </div>
    )
}

export default NoteList;