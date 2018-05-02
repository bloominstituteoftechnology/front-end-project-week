import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { Link } from "react-router-dom";
import "./css/Template.css";

const Template = props => {
  return (
    <Card className="card">
      <CardBody>
        <CardTitle>
          <Link
            className="card__ele--decore card__ele--title"
            to="/noteview"
            title={props.note.title}
          >
            {props.note.title}
          </Link>
          <div className="card__ele" />
        </CardTitle>
        <CardText>
          <Link className="card__ele--decore card__ele--content" to="/noteview">
            {props.note.content}
          </Link>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default Template;

// Use card component from reactstrap to format the note
