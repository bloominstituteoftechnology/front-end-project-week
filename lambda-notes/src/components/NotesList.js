import React from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';


const NotesList = (props) => {
    return (
        <div className='NotesList'>
            <Card>
                <CardBody>
                    <CardTitle> {props.notes.title} </CardTitle>
                    <CardText> {props.notes.description} </CardText>
                </CardBody>
            </Card>
        </div>
    )
}
export default NotesList