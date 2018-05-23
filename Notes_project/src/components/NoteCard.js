import React from 'react';
import {Card, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import NoteContainer from './NoteContainer';




const NoteCard = (props) => {
    console.log("PROPS:", props);
    return (
        <div>
            
            <Card>
                <CardBody>
                    <CardTitle> {props.noteData.title} </CardTitle>
                    <CardText>{props.noteData.body}</CardText>
                </CardBody>
            </Card>
        </div>

    );
};

export default NoteCard;