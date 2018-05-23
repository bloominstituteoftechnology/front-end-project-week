import React from "react";
import { Card, CardTitle, CardText, Col } from "reactstrap";

const NoteCard_ = ({card}) => {
  // const { card } = props;
  // console.log("card",card);
  return (
    <Card className="custom-NoteCard" body>
      <CardTitle>{card.title.length > 16 ? card.title.substring(0,13) : card.title }{card.title.length > 13 && '...'}</CardTitle>
      <hr className="custom-hr" />
      <CardText>{card.content.substring(0,118)}</CardText>
    </Card>
  );
};

export default NoteCard_;
 