import React from 'react';
import {Card,CardHeader, CardBody} from 'reactstrap'
import './NoteCard.css';
const note = props => {
    return (
        <div className='NoteCard'>
            <Card key={props.note.id}>
                <CardHeader>{props.note.title}</CardHeader>
                <CardBody>{props.note.content}</CardBody>
            </Card>

        </div>
    );
};
export default note;