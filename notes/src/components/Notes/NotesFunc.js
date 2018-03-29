import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

import "./NotesFunc.css"

class NotesFunc extends Component {
  render() {
    return(
      <Card className="cardPls">
        <CardBody>
        <Link to={'/NoteView'}>
          <CardTitle className="noteTitle"> Note Title </CardTitle>
        </Link>
        <hr />
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          </CardText>
        </CardBody>
      </Card>
    );
  }
}

export default NotesFunc;