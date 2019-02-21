import React, { Component } from 'react';
import NoteStyles from './styles/NoteStyle';
import {Link} from 'react-router-dom';

const Note = (props) => {  
    const note = props.note;
    console.log(`props from note`,props)
        return (
            <>
            <NoteStyles>
              <div className="note">
                <Link to={`/note/${note.id}`}  className="a">
                   <h3>{props.note.title}</h3>
                </Link>
                   {props.note.content}
               </div>
            </NoteStyles>   
            </>
        );
    
}
export default Note;
