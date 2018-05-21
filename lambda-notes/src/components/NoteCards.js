import React from 'react';
import './NoteCards.css';
import { Card, CardTitle, CardText } from 'reactstrap';

const NoteCards = (props) => {
  // console.log(props)


  return(
    <React.Fragment>
      <h3>Your Notes:</h3>
      <div className="row justify-content-between mt-4">      
        {props.notes.map(note => {
          return (
            <div key={note.id} className="mb-4 col-12 col-md-4">
              <Card className="card">
                <CardTitle className="card-title">{note.title}</CardTitle>
                <CardText className="card-body">{note.body}</CardText>              
              </Card> 
            </div>                      
          )
        })}
      </div>
    </React.Fragment>
  ) 
}
 
export default NoteCards;