import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const NoteCard = (props) =>{

    return (
        <div>
            <Link to={`/notes/${props.note.id}`}>
            <Card key={props.note.id}>
                <CardBody>
                    <CardTitle>{props.note.title}</CardTitle>
                    <CardText>{props.note.subcontent}</CardText>
                </CardBody>
            </Card>
            </Link>
        </div>
    );
}




export default NoteCard
