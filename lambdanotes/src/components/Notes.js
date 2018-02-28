import React from 'react';
import '../styles/App.css';
// import Noteview from './NoteView';

function Notes(props) {
        return (
            <div className="single-note">
                <h4>{props.note.title}</h4>
                 <p>{props.note.paragraph}</p>
            </div>)
    
}
export default Notes;