import React from 'react';
import {Card, CardBody, CardTitle, CardText, CardGroup} from "reactstrap"

const Note = props => {
  const { id, title, body} = props.note;
  console.log("note id", props.note.id)
console.log(props.note)
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>  {title}</CardTitle>
          <CardText> {body}</CardText>
        </CardBody>
      </Card>
      </div>

  );
};

export default Note;
