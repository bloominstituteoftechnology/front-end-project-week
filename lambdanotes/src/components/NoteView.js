import React from 'react';
import '../styles/App.css';

function Noteview(props) {
    return ( 
        <div className="single-note">
            <h4>{props.note.title}</h4>
            <p>{props.note.paragraph}</p>
        </div>
    
    );
}

export default Noteview;
