import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

const Note = props => {
    return (
        <Card className='note'>
            <CardBody>
                <Link to={`/note/${props.note.id}`}>
                    <CardTitle>{props.note.title}</CardTitle>
                </Link>
                <hr />
                <CardText>{props.note.text}</CardText>
            </CardBody>
        </Card>
    )
}


export default Note;