import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, CardImg, Card, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';


const NotesDiv = (props) => {
	return (
	<div className="notes-card-container">
	<h3 className="card-body-title">Your Notes:</h3>
	<CardDeck>{props.notes.map(note =>{
      return(	
	<div>
	<Card className="note-card" key={note.id}>
	  <CardBody>
          <CardTitle>{note.title}</CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText>{note.textBody}</CardText>

        </CardBody>
      </Card>
      </div>)
	})}
    </CardDeck>
		</div>
	
  );


};



export default NotesDiv;
