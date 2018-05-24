import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardText } from 'reactstrap';
import "./NoteCard.css";

const NoteCard = (props) => {
    return (
        <Card className="note-card">
            <CardHeader className="card-header">
                <Link to={`note/${props.note.id}`}>{props.note.title} </Link>
            </CardHeader>
            <CardBody className="card-body">
                <CardText>{props.note.content}</CardText>
            </CardBody>
        </Card>
    )
}

export default NoteCard;