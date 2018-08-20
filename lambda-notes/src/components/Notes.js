import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText, Row, Container, Col } from 'reactstrap';

import './Notes.css';

const Notes = props => {
    return (
        <Container className="notes">
            <Row style={{paddingLeft: 15 + 'px'}}><h2>Your Notes:</h2></Row>
            <Row >
                {props.notes.map(note => (
                    <Col style={{paddingTop: 30 + 'px'}} key={note.id} xs="12" sm="4">
                        <Link to={`/notes/${note.id}`}>
                            <Card style={{height: 100 + '%'}}>
                                <CardBody>
                                    <CardTitle style={ { borderBottom: "1px solid black" }}>{note.title}</CardTitle>
                                    <CardText>{note.text}</CardText>
                                </CardBody>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Notes;