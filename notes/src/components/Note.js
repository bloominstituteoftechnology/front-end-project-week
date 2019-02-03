import React from 'react';
import {Card, CardBody, CardTitle, CardText} from "reactstrap"

const Note = props => {
  const { id, title, textBody} = props.note;
  return (
      <Card className = "note">
        <CardBody>
          <CardTitle className = "titlular">  {title}</CardTitle>
          <CardText> {textBody}</CardText>
        </CardBody>
      </Card>
  );
};

export default Note;
