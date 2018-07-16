import React from 'react';
import '../App.css';

const Note = props => {


    return ( 
        <div className="note-card">
            <p>{props.title}</p>
            <p>{props.content}</p>
        </div>
     );
}



export default Note
