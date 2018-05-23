import React from 'react';
import { Link } from 'react-router-dom';

import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col, CardColumns, Container } from 'reactstrap';
import './NotesContainer.css'
import NoteCard from './NoteCard'


const NotesContainer = (props) => {


    
    return (
        <div>
            <h5>Your Notes:</h5>
            {props.notes.map((note) => {
                return <NoteCard key={note.id} note={note}/>}
            )}

        </div>
        

      
            
            // <Card className = "note-container" key={props.note.noteID}>
            //     <CardBody className="text-left" className="solo-card">
            //         <CardTitle>
            //         <Link to={`/noteView/${props.note.noteID}`}> {props.note.noteTitle} </Link>
            //         </CardTitle>
            //         <hr/>
            //         <CardText>
            //         {props.note.noteText}
            //         </CardText>
            //     </CardBody>
            // </Card>
    )
}

export default NotesContainer;

