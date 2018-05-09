import React from 'react';
import "../App.css";
import { Link } from 'react-router-dom';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const Notes = props => {
  return(
    <div className='Notes-container'>
    <h2 className='Notes-your-notes'>Your Notes:</h2>
      {props.notes.length === 0 ? <p>Fetching Notes...</p> : null }
      <div className='Notes-card-container'>
        {props.notes.map((note, i) => {
          return (
              <Card key={i} className='Notes-card' body outline color="secondary">
                <CardBody>
                  <Link to={`notes/${note.id}`}>
                    <CardTitle>{note.title}</CardTitle>
                  </Link>
                  <CardSubtitle>{note.content}</CardSubtitle>
                </CardBody>
              </Card>
          )
        })}
      </div>
    </div>
    )
}

export default Notes;