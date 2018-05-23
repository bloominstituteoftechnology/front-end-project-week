import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Note.css';

const Note = props => {
    return (    
        <div className = 'note'>
            <Link to={`/note/${props.note.id}`}>
            <CardTitle>{props.note.title}</CardTitle>
            </Link>
            <hr />
            <CardText>{props.note.text}</CardText>
         </div>
    )
}


export default Note;