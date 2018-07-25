import React from 'react';
import Note from '../Note/Note.js'
import './YourNotes.css';


    const YourNotes= props => {
        return (
            <div className ='note-list'>
                <h1>Your Notes:</h1>
                <div className='note-container'>
                {props.notes.map(note=> {
                    return (
                        
                        <Note
                            title={note.title}
                            key={note.id}
                            content={note.content}
                        />
                        
                    );
                })}
                </div>
            </div>
        );
    }


// YourNotes.defaultProps ={
//     notes:[]
// };

export default YourNotes;