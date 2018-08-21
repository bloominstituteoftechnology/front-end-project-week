import React from 'react';
import { Card, CardText, CardBody, CardTitle} from 'reactstrap';
import NoteForm from './noteform';

const Note = props => {
    console.log(props.notes)
    return (  
        <div>
            {props.notes.edittoggle ? 
            <NoteForm btntext="Update"/> 
            : 
            <Card>
                <CardBody>
                    <CardTitle>{props.title}</CardTitle>
                    <CardText>{props.note}</CardText>
                </CardBody>
            </Card>
            }
           
        </div>
        
    );
}
 
export default Note;