import React  from 'react';
import NoteStyles from './styles/NoteStyle';
import {Link} from 'react-router-dom';

const Note = (props) => {  
    // const note = props.note;
    //   console.log(note);
       
        return (
            <>
            <NoteStyles>
              <div className="note yellow-bg">
                <Link to={`/note/${props.note.id}`}  className="a">
                   <h3>{props.note.title}</h3>
                   
                </Link>
                   
                   {props.note.content}
               </div>
            </NoteStyles>   
            </>
        );
    
}
export default Note;
