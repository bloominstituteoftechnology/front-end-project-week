import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

const NoteList = () => {
    return (
        <div className = "h-70 w-25 m-3">
            <Card>
                <CardBody>
                        <CardTitle>Note Body</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default NoteList;
