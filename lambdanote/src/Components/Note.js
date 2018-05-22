import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

const Note = props => {
    return (
        <div className='row boxes'>
        <Card className = 'col-4 note'>
            <CardBody>
                <Link to={`/note-view/${props.note.id}`}>
                <CardTitle>{props.note.title}</CardTitle>
                </Link>
                <hr />
                <CardText>{props.note.text}</CardText>
            </CardBody>
        </Card>
        </div>
    )
}


export default Note;