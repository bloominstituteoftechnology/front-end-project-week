import React from 'react';
import { Link } from "react-router-dom";
import './Notes.css';




function Notes(props) {
return (  
    <div className ="card">
    <Link to = '/noteview/:id' style={{ textDecoration:'none', activeStyle:'none', color:'black' }}>  
        <h3 className="cardtitle">{props.note.title}</h3>
    </Link>
        <hr/>
        <p>{props.note.note}</p>
    </div>
)
}

export default Notes