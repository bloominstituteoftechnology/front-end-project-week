import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import {Link} from 'react-router-dom';

const NoteList = (props) => {
    return (
        <div className = "h-70 w-25 m-3">
            <Card>
                <CardBody>
                        <CardTitle><Link to ={`viewNote/${props.id}`}>{props.title}</Link></CardTitle>
                        <CardText>{props.noteBody}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default NoteList;
