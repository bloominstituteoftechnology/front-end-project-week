import React from 'react';
import { Link } from 'react-router-dom';
import './NoteCard.css'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


const NoteCard = (props) => {

    return (

        <div className="card m-1 mb-3" style={{width: `18rem`}} key={props.note.noteID}>
            <div className="card-body">
                <h5 className="card-title">
                    <Link to={`/noteView/${props.note.noteID}`} onClick ={props.viewCurrentNote(props.note.noteID)} className="noteTitle"><strong> {props.note.noteTitle} </strong></Link>
                    <hr/>
                </h5>
                <p className="card-text">
                    {props.note.noteText}
                </p>
            </div>
        </div>
            
        // <Card className = "note-container" key={props.note.noteID}>
        //     <CardBody className="text-left" className="solo-card">
        //         <CardTitle>
        //         <Link to={`/noteView/${props.note.noteID}`} onClick ={props.viewCurrentNote(props.note.noteID)}> {props.note.noteTitle} </Link>
        //         </CardTitle>
        //         <hr/>
        //         <CardText>
        //         {props.note.noteText}
        //         </CardText>
        //     </CardBody>
        // </Card>
    )

}

export default NoteCard;

<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>