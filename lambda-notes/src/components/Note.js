import React from 'react';
import { Card, CardBody, CardTitle, CardText, Col } from 'reactstrap';

const Note = (props) => {

    return (
    <div className="notes-container">
        <Col sm="4">
            <Card body className="note-card">
                <CardBody>
                    <CardTitle className="note-title">{props.note.title}</CardTitle>
                    <CardText>{props.note.body}</CardText>
                </CardBody>
            </Card>
        </Col>
    </div>
    )
}

export default Note;
