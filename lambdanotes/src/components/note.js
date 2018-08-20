import React from 'react';
import { Card, CardText, CardBody, CardTitle} from 'reactstrap';

const Note = (props) => {
    return (  
        <Card>
            <CardBody>
                <CardTitle>{props.title}</CardTitle>
                <CardText>{props.note}}</CardText>
            </CardBody>
        </Card>
    );
}
 
export default Note;