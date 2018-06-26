import React from 'react';
import { Card, CardBody, CardTitle, } from 'reactstrap';
import '../component.css';

const Notes = props =>{
        return (
            <div className="note-card">
            <Card>
                    <CardBody>
                        <CardTitle>{props.NoteData.title} </CardTitle>
                        <CardTitle>{props.NoteData.content} </CardTitle>
                        <CardTitle>{props.NoteData.id} </CardTitle>
                        <CardTitle>{props.NoteData.notesList} </CardTitle>
                    </CardBody>
                </Card>
            </div>
        )
         
}

export default Notes;