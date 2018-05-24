import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle } from 'reactstrap';
import ReactMarkdown from 'react-markdown';

const NoteThumbnail = (props) => {
    
    return (
        // <Col xs="12" md="6" lg="4" xl="2" className="col">
            <Link to={`/note/${props.note.id}`} className="note-link">
                <Card className="note-thumbnail">
                    <CardBody>
                        <CardTitle className="note-title heading">{props.note.title}</CardTitle>
                        <ReactMarkdown source={props.note.content} className="thumbnail-content"/>
                    </CardBody>
                </Card>
            </Link>
        // </Col>
    )
}
 
export default NoteThumbnail;