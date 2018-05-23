import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, Col } from 'reactstrap';
import ReactMarkdown from 'react-markdown';

const NoteThumbnail = (props) => {
    
    return (
        <Col xl="2" lg="3" md="4" sm="6">
            <Link to={`/note/${props.note.id}`} className="note-link">
                <Card className="note-thumbnail">
                    <CardBody>
                        <CardTitle className="note-title heading">{props.note.title}</CardTitle>
                        <ReactMarkdown source={props.note.content}/>
                    </CardBody>
                </Card>
            </Link>
        </Col>
    )
}
 
export default NoteThumbnail;