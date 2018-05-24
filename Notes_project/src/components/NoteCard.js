import React from 'react';
import {Card, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import NoteContainer from './NoteContainer';
import {Link} from 'react-router-dom';




const NoteCard = (props) => {
    console.log("PROPS:", props);
    return (
        <div className="Notes">
            {props.noteData.map(note =>{
                return(
                <div key={note.title}>
                <Link to={'/NoteView'}>
                    <Card className="Card">
                        <CardBody className="CardBody">
                            <CardTitle className="CardTitle"> {note.title} </CardTitle>
                            <CardText className="CardText">{note.body}</CardText>
                        </CardBody>
                    </Card>
                </Link>
                </div>
                );
            })}
        </div>

    );
};

export default NoteCard;