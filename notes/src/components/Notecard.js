import React from 'react';
import { Card, CardBody, CardText } from 'reactstrap';
import { Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

const NoteCard = props => {
    return (
        <Card className='notecard'>
            <CardBody>
                <Link to={`/notecard/${props.note.id}`}>
                    <CardTitle>{props.note.title}</CardTitle>
                </Link>
                <hr />
                <CardText>{props.notecard.text}</CardText>
            </CardBody>
        </Card>
    )
}


export default Note;

// makes cards