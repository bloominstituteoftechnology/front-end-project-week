import React from 'react';
import './NoteCards.css';
import { Card, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

const NoteCards = (props) => {
  // console.log(props)


  return(
    <React.Fragment>
      <h3>Your Notes:</h3>
      <div className="row justify-content-between mt-4">      
        {props.notes.map(note => {
          return (
            <Link to={`/note/${note.id}`}key={note.id} className="links mb-4 col-12 col-md-4">
              <Card className="card">
                <CardTitle className="card-title">{note.title}</CardTitle>
                <CardText className="card-body">{note.body.substring(0,250)+"..."}</CardText>              
              </Card> 
            </Link>                      
          )
        })}
      </div>
    </React.Fragment>
  ) 
}
 
export default NoteCards;