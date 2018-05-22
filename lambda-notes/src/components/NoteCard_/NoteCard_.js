import React from "react";
import { Card, CardTitle, CardText, Col } from "reactstrap";

const NoteCard_ = props => {
  const { card } = props;
  return (
    <Card className="custom-NoteCard" body>
      <CardTitle>{card.title}</CardTitle>
      <CardText>{card.shortContent}</CardText>
    </Card>
  );
};

export default NoteCard_;
