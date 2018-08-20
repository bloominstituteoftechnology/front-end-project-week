import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText, Row, Container } from 'reactstrap';

import './Notes.css';

const Notes = props => {
    return (
        <Container className="notes">
            <Row><h2>Your Notes:</h2></Row>
            <Row>
                {props.notes.map(note => (
                    <Link key={note.id} to={`/notes/${note.id}`}>
                        <Card>
                            <CardBody>
                                <CardTitle>{note.title}</CardTitle>
                                <CardText>{note.text}</CardText>
                            </CardBody>
                        </Card>
                    </Link>
                ))}
            </Row>
        </Container>
    );
}

export default Notes;