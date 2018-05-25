import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col, CardColumns, Container
} from 'reactstrap';
import './NotesList.css'

const NotesList = (props) => {
    return (
        <Card className="notes-List" key={props.note.id}>
            <CardBody className="text-left" className="solo-card">
                <CardTitle>
                    {props.note.noteTitle}
                </CardTitle>
                <hr />
                <CardText>
                    {props.note.noteText}
                </CardText>
            </CardBody>
        </Card>
    )
}

export default NotesList;