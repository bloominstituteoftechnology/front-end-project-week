import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import './Notes.css'


function Notes(props) {
  function routeToNote(event, note) {
    event.preventDefault();
    props.history.push(`/notes/${note._id}`);
    props.getNoteById(note._id)
  }

  return( 
    <div className='notesPage'>
      <h2>Your Notes:</h2>
      <div className="notesContainer">
        {props.notes.map((note, i)=> {
          return (
              <Card
                className="miniNote"
                onClick={event => routeToNote(event, note)}
                key={i}>                
                <CardBody>
                  <CardTitle>{note.title}</CardTitle>
                  <CardText>{note.textBody}</CardText>
                </CardBody>
              </Card>
            )
        })}
      </div>
    </div>
    )
}

export default Notes;