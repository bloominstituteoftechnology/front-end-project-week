import React from 'react';
import { Card, CardBody, CardTitle, CardText, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const NoteThumbnail = (props) => {
    
    return (
        <Col sm="4">
            <Card className="note-thumbnail">
                <CardBody>
                    <CardTitle className="note-title heading"> <Link className="note-link" to={`note/${props.note._id}`}> {props.note.title} </Link></CardTitle>
                    <CardText>{props.note.content}</CardText>
                </CardBody>
            </Card>
        </Col>
    )
}
 
export default NoteThumbnail;