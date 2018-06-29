import React from 'react';
import './NoteCards.css';
import { Card, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

const NoteCards = (props) => {
  
  
  
  // const fireBaseNotes = Object.entries(props.notes.notes).map(article => {
  //   return Object.assign({}, { id: article[0] }, article[1]);
  //   });
    
  


 //this is when you started making changes
  return(
    
    <React.Fragment>
      
      <h3>{props.user}:</h3>
      <div className="row justify-content-between mt-4">      
        {props.notes.map(note => {
          return (
            <Link to={`/note/${note._id}`}key={note._id} className="links mb-4 col-12 col-md-4">
              <Card className="card">
                <CardTitle className="card-title">{note.title}</CardTitle>
                <CardText className="card-body">
                  {note.body.length > 250 ? note.body.substring(0,250)+"..." : note.body}
                </CardText>              
              </Card> 
            </Link>                      
          )
        })}
      </div>
    </React.Fragment>
  ) 
}
 
export default NoteCards;