import React from 'react';
import { Link } from 'react-router-dom';

import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col, CardColumns, Container } from 'reactstrap';

import './NotesContainer.css'
import NoteCard from './NoteCard'


const NotesContainer = (props) => {
    return (
        <div className="container">
            <h4 className="mt-5 mb-3"><strong>Your Notes:</strong></h4><br/>
            <div className="row col-md-16">
                 
           
                {props.notes.map((note) => {
                    return <NoteCard key={note.id} note={note} viewCurrentNote = {props.viewCurrentNote}/>}
                )}
            </div>
        </div>
    )
}

export default NotesContainer; 

