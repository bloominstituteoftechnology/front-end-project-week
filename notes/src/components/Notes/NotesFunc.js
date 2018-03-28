import React from 'react';
import { Card, Button, CardTitle, CardText, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

import "./NotesFunc.css"

const NotesFunc = (props) => {
  return(
    <Card>
      <CardBody>
        <CardTitle> Note </CardTitle>
        <CardText>
          lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        </CardText>
        <Link to={'/NoteView'}>
          <Button>View Note</Button>
        </Link>
      </CardBody>
    </Card>
  );
};

export default NotesFunc;