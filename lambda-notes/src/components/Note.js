import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText, Row, Container, Col } from 'reactstrap';
import ModalExample from './DeleteModal'

import './Note.css';

const Note = props => {
    const note = props.notes.find(
        note => note.id === Number(props.match.params.id)
    );
    return (
        <Container className="note">
            <Row noGutters>
            <Col xs="9"></Col>
                <Col xs="1">
                    <Link style={{ color: "black" }} to="/edit">edit</Link>
                </Col>
                <Col xs="1">
                    <Link style={{ color: "black" }} to="/delete">delete</Link>
                </Col>
                <Col xs="1">
                <ModalExample />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>{note.title}</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>{note.content}</p>
                </Col>
            </Row>
        </Container>
    );
};



export default Note;