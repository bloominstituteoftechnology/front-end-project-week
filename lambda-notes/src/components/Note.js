import React from 'react';
import { Link } from 'react-router-dom';
import './Note.css'

 const Note = props => {
    const note = props.notes.find(
         note => note.id === Number(props.match.params.id)
    );

     return (
        <div className="note">
        <Link to="/edit"><i class="fas fa-edit"></i></Link>
           <Link to="/delete"><i class="fas fa-trash-alt"></i></Link>
             <h2>{note.title} </h2>
             <p>{note.text}</p>
         </div>
     );
   ;}


export default Note;


