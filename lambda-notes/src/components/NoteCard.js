import React from 'react';
import { Link } from 'react-router-dom';

import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


const NoteCard = (props) => {

    return (
            
        <Card className = "note-container" key={props.note.noteID}>
            <CardBody className="text-left" className="solo-card">
                <CardTitle>
                <Link to={`/noteView/${props.note.noteID}`}> {props.note.noteTitle} </Link>
                </CardTitle>
                <hr/>
                <CardText>
                {props.note.noteText}
                </CardText>
            </CardBody>
        </Card>
    )

}

export default NoteCard;