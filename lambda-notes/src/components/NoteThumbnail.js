import React from 'react';
import { Card, CardBody, CardTitle, CardText, Col } from 'reactstrap';

const NoteThumbnail = (props) => {
    
    return (
        <Col sm="4">
            <Card className="note-thumbnail">
                <CardBody>
                    <CardTitle className="note-title heading">{props.note.title}</CardTitle>
                    <CardText>{props.note.content}</CardText>
                </CardBody>
            </Card>
        </Col>
    )
}
 
export default NoteThumbnail;