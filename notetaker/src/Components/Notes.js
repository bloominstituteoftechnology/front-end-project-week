import React from 'react';
import "../App.css";
import { Col, Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const Notes = props => {
  return(
    <div>
      <Col sm="8">
      {props.notes.length === 0 ? <p>Fetching Notes...</p> : null }
        {props.notes.map(note => {
          return (
            <Card>
              <CardBody>
                <CardTitle>{note.title}</CardTitle>
                <CardSubtitle>{note.content}</CardSubtitle>
                <CardText>Other Text!?</CardText>
                {/* <Button onClick={() => props.deleteFriend(friend.id)} >Delete Friend</Button> */}
              </CardBody>
            </Card>
          )
        })}
        </Col>          
    </div>
    )
}

export default Notes;