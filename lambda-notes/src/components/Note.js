import React from 'react';
import { Container, Row, Card, CardBody, CardTitle, CardText, Col } from 'reactstrap';


const Note = (props) => {

  return (
    <Container className="notes-container">
    <Row>
        <Col sm="4">
            <Card body className="note-card">
                <CardBody>
                    <CardTitle className="note-title">{props.note.title}</CardTitle>
                    <CardText>{props.note.body}</CardText>
                </CardBody>
            </Card>

        </Col>
        </Row>
    </Container>
    )
}

export default Note
