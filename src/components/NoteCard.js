import React from 'react';
import { Row, Col } from 'reactstrap';
import ReactMarkdown from 'react-markdown';

const NoteCard = (props) => {
    return (    
        <Row className="single-note">
            <Col sm="12" xl="9">
                <h3 className="heading">{props.note.title}</h3>
                <div  className="note-content">
                    <ReactMarkdown source={props.note.content}/>
                </div>
            </Col>
        </Row>
    )
}
 
export default NoteCard;