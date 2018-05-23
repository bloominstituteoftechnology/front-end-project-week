import React from 'react';
import { Card, CardBody, CardTitle, } from 'reactstrap';
import { Button } from 'react-bootstrap'; 
import { Link } from 'react-router-dom';
import '../components/components.css';

const Notes = props =>{
        return (
            <div className="note-container">
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