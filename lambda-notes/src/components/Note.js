import React from 'react';
import { Container, Card, CardBody, CardTitle, CardText, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

const Note = props => {
    return (
        <Card className='note col-12'>
            <CardBody>
                <Link to={`/note/${props.note.id}`}>
                    <CardTitle>
                        {props.note.title}
                    </CardTitle>
                </Link>
                <CardText>
                    {props.note.content}
                </CardText>
            </CardBody>
        </Card>
    )
}

export default Note;