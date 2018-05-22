import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardText} from 'reactstrap';
import "./NoteCard.css";

const NoteCard = (props) => {
    return (
        <Card className="note-card">
            <CardHeader className="card-header">
                 {props.note.title} 
            </CardHeader>
            <CardBody className="card-body">
                <CardText>{props.note.content}</CardText>
            </CardBody>
        </Card>
    )
}

export default NoteCard;