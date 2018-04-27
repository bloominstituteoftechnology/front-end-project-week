import React from "react";
import { Link } from "react-router-dom";
import { Card, CardText, CardBody, CardHeader } from "reactstrap";

const Note = props => {
  const { title, content } = props.note;
  return (
    <div className="note__card">
      <Card>
        <CardBody>
          <CardHeader tag="h4">
            <Link to={`/note/${props.note.id}`} className="note__link">
              {title}
            </Link>
          </CardHeader>
          <CardText>{content}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Note;
