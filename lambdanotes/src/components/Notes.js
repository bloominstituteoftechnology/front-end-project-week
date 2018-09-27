import React from 'react';
import { Route, Link } from "react-router-dom";
import SingleNote from './SingleNote';
import './Notes.css';
 
// let clickID = (props, e) => {
//     // e.preventDefault();
//     e.target.value, props
//   }



function Notes(props) {
  console.log(props.notes);

    
return (  

    <div className ="card">
    <Link to={`/${props.note._id}`}  style={{ textDecoration:'none', activeStyle:'none', color:'black' }}> 
        <h3 className="cardtitle" onClick={() => props.history.push(`/${props.note._id}`)}> {props.note.title}</h3>
    </Link> 
        <hr/> 
        <p>{props.note.textBody}</p>
    </div>
)
}


export default Notes


