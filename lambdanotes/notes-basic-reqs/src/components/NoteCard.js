import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button, Row, Col } from 'reactstrap';




const NoteCard = (props) => {
return (
    <Row>
    <Col sm="6">
        <Card body>
        <CardTitle>{props.note.title}</CardTitle>
            <div class="col-12 text-truncate">
            <CardText>{props.note.text}</CardText>
            </div>
        <Link to={`/note/${props.note.id}`}>
        <Button>View</Button>
        </Link>
        </Card>
    </Col>
    </Row>
);
};


export default NoteCard;