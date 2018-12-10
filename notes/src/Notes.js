import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import './Notes.css'


function Notes(props) {
  function routeToNote(event, note) {
    event.preventDefault();
    props.history.push(`/notes/${note.id}`);
    props.getNoteById(note.id)
  }

  return( 
    <div className='notesPage'>
      <h2>Your Notes:</h2>
      <div className="notesContainer">
        {props.notes.map((note, i)=> {
          return (
              <Card
                note={note}
                className="miniNote"
                onClick={event => routeToNote(event, note)}
                key={i}>                
                <CardBody className='cardBody'>
                  <CardTitle className='title'>{note.title}</CardTitle>
                  <CardText className='note'>{note.content}</CardText>
                </CardBody>
              </Card>
            )
        })}
      </div>
    </div>
    )
}

export default Notes;