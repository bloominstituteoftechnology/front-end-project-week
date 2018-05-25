import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

const NoteList = (props) => {
    return (
        <div className = "h-70 w-25 m-3">
            <Card>
                <CardBody>
                        <CardTitle>{props.title}</CardTitle>
                        <CardText>{props.noteBody}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default NoteList;
