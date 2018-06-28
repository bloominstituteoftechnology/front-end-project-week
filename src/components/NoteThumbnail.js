import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle } from 'reactstrap';
import ReactMarkdown from 'react-markdown';

const NoteThumbnail = (props) => {
    
    return (
        // <Link to={`/note/${props.note._id}`} className="note-link">
            <Card className="note-thumbnail" onClick={() => this.props.history.push(`/note/${props.note._id}`)}>
                <CardBody>
                    <CardTitle className="note-title heading">{props.note.title}</CardTitle>
                    <ReactMarkdown source={props.note.content} className="thumbnail-content"/>
                </CardBody>
            </Card>
        // </Link>
    )
}
 
export default NoteThumbnail;