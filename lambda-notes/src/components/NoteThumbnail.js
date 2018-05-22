import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText, Col } from 'reactstrap';

const NoteThumbnail = (props) => {
    
    return (
        <Col sm="4">
            <Link to={`/note/${props.note.id}`}>
                <Card className="note-thumbnail">
                    <CardBody>
                        <CardTitle className="note-title heading">{props.note.title}</CardTitle>
                        <CardText>{props.note.content}</CardText>
                    </CardBody>
                </Card>
            </Link>
        </Col>
    )
}
 
export default NoteThumbnail;