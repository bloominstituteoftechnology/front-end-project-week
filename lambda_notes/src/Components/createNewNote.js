import React from 'react';
import { Card, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';

  export default class CreateNewNote extends React.Component {
      constructor(props) {
      super(props);
      this.state = {
          noteTitle: this.noteTitle,
          noteText: this.noteText
      }
  return (
    <div>
      <Card>
         <CardBody>
          <CardTitle className='NoteTitle'>{this.noteTitle}</CardTitle>
          
          <CardText className='NoteText'>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Create</Button>
        </CardBody>
      </Card>
    </div>
  );
};
  }

