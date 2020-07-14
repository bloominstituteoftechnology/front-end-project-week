import React from 'react';
import { Container, Row, Card, CardBody, CardTitle, CardText, Col } from 'reactstrap';
import '../App.css';



const NoteCard = (props) => {

  return (

        <Col sm="4">
            <Card body className="note-card">
                <CardBody>

                    <CardTitle className="notecard-title">{props.note.title}</CardTitle>
                    <CardText>{props.note.content}</CardText>
                </CardBody>
            </Card>

        </Col>

    )
}

export default NoteCard;
