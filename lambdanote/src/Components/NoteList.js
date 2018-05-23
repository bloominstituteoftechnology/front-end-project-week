import React from 'react';
import Note from './Note';
import { Link } from 'react-router-dom';
import { Container, Row, Button } from 'reactstrap';


const NoteList = (props) => {
    return (
         <div>
            <div >
            <h3 className='notelist-header'>Your Notes:</h3>
            <div>            
                {props.notes.map(note => <Note key={note.id} note={note} />)}        
            </div>
            </div>
        </div>
    )
    
}

export default NoteList;
