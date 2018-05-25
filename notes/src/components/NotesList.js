import React from 'react';
import {Card,
      CardText, CardBody, CardTitle} from 'reactstrap';
import './NotesList.css'

const NotesList = (props) => {
    return (
        <Card className="notes-List row col-md-16" key={props.note.id}>
            <CardBody  className="text-left" className="solo-card">
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


//this is my lambda notes box