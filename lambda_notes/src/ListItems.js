import React, { Component } from 'react';
import { Card, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';


export default class ListItems extends Component {
    constructor() {
      super();
      this.state = {
        notes: 
          {
            note_title: 'whatever you say',
            note_content: 'this best work or my head will explode'
          }
        
      };
    }

render() {
  return (
    <div className="listNotes">
    <h4>Your Notes</h4>
    {this.props.notes.map(note => {
      return(
        <Card>
        <CardBody>
        <CardTitle>{note_title}</CardTitle>
        <CardText>{note_content}</CardText>
        </CardBody>
        
        </Card>
      )
    })}
    </div>
  )
}
}












