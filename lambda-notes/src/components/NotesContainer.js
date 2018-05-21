import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col, CardColumns } from 'reactstrap';
import './NotesContainer.css'

const NotesContainer = (props) => {
    return (
            <Card className = "note-container" key={props.note.id}>
                <CardBody className="text-left">
                    <CardTitle>
                    {props.note.noteTitle}
                    </CardTitle>
                    <hr/>
                    <CardText>
                    {props.note.noteText}
                    </CardText>
                </CardBody>
            </Card>
      
    )
}

export default NotesContainer;