import React, { component } from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import NoteList from './NoteList';

const Note = props => {
    return (
        <div>
            <Card className='col-3'>
                <CardBody>
                    <CardTitle>{props.note.title}</CardTitle>
                    <CardText>{props.note.content}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default Note;