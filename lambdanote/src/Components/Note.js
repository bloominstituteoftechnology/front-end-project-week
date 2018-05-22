import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';


const Note = props => {
    return (
        <div className='row boxes'>
        <Card className = 'col-12 col-sm-6 col-md-4 note'>
            <CardBody>
                <CardTitle>{props.note.title}</CardTitle>
                <hr />
                <CardText>{props.note.text}</CardText>
            </CardBody>
        </Card>
        </div>
    )
}


export default Note;