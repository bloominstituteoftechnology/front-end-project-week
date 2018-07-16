import React from 'react';
import '../App.css';

const Note = props => {


    return ( 
        <div className="note-card">
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
     );
}



export default Note
