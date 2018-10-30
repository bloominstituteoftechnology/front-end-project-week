import React from 'react';
import { Link } from "react-router-dom";
import './Notes.css';
 
// let clickID = (props, e) => {
//     // e.preventDefault();
//     e.target.value, props
//   }



function Notes(props) {
  console.log(props.note);

    
return (  

    <div className ="card">
        <Link to={`/notes/${props.note.id}`}  style={{ textDecoration:'none', activeStyle:'none', color:'black' }}> 
            <h3 className="cardtitle" > {props.note.name}</h3>
        </Link> 
            <hr/> 
            <p>{props.note.description}</p>
    </div>
)
}


export default Notes


