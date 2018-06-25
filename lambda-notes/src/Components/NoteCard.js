import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardText } from 'reactstrap';
import "./NoteCard.css";
// import Markdown from 'markdown-to-jsx';

const NoteCard = (props) => {
    return (
        <Card className="note-card">
            <CardHeader className="card-header">
                <Link to={`note/${props.note.id}`}>{props.note.title} </Link>
            </CardHeader>
            <CardBody className="card-body">
                {props.note.content}
            </CardBody>
        </Card>
    )
}

export default NoteCard;