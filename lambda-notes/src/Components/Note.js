import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const Note = props => {
    return <div>
        <Card body>
                    <CardTitle> Title: {props.note.title}</CardTitle>
                    <CardText>Body: {props.note.body}</CardText>   
        </Card>
    </div>
    }

export default Note;