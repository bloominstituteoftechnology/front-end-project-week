import React from 'react';
import {Card, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import NoteContainer from './NoteContainer';




const NoteCard = (props) => {
    console.log("PROPS:", props);
    return (
        <div>
            {props.noteData.map(note =>{
                return(
                <div key={note.title}>
                <Card>
                    <CardBody>
                        <CardTitle> {note.title} </CardTitle>
                        <CardText>{note.body}</CardText>
                    </CardBody>
                </Card>
                </div>
                );
            })}
        </div>

    );
};

export default NoteCard;