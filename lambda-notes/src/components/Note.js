import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText, Row, Container, Col } from 'reactstrap';

const Note = props => {
    const note = props.notes.find(
        note => note.id == props.match.params.id
    );
    return (
        <div>
        <p>{note.title}</p>
        <p>{note.content}</p>
        </div>
    );
};


export default Note;