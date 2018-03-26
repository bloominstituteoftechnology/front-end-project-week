import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

function(props) {
    return(
        <Card>
            <CardBody>
                <CardTitle>{props.title}</CardTitle>
                <CardText>{props.content}</CardText>
            </CardBody>
        </Card>
    )
}

export default Template;

// Populate each note with html tags

// Use card component from reactstrap to format the note