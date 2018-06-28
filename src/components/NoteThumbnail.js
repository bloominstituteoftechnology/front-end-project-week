import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle } from 'reactstrap';
import ReactMarkdown from 'react-markdown';

const NoteThumbnail = (props) => {
    
    return (
        // <Link to={`/note/${props.note._id}`} className="note-link">
            <Card className="note-thumbnail" onClick={props.selectNote()}>
                <CardBody>
                    <CardTitle className="note-title heading">{props.note.title}</CardTitle>
                    <ReactMarkdown source={props.note.content} className="thumbnail-content"/>
                </CardBody>
            </Card>
        // </Link>
    )
}
 
export default NoteThumbnail;