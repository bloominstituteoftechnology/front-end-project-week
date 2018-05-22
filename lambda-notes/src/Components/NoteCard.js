import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardText} from 'reactstrap';

const NoteCard = (props) => {
    return (
        <Card className="note-card">
            <CardHeader>
                 {props.note.title} 
            </CardHeader>
            <CardBody>
                <CardText>{props.note.content}</CardText>
            </CardBody>
        </Card>
    )
}

export default NoteCard;