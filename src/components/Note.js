import React from 'react';
import NoteStyles from './styles/NoteStyle';
import {Link} from 'react-router-dom';

const Note = (props) => {  
    const note = props.note;
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
