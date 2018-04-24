import React from 'react';
import './NoteCard.css'
import {Card,CardHeader, CardBody} from 'reactstrap'
const note = props => {
    return (
        <div className='NoteCard'>
            <Card>
                <CardHeader>{props.note.title}</CardHeader>
                <CardBody>{props.note.content}</CardBody>
            </Card>
        </div>
    );
};
export default note;