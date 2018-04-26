import React from 'react';
import { Card, CardTitle, CardBody, CardText, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export const CardFactory = props => {
  const contentLength = props.note.content.split(" ");
  const { note } = props;
  return (
    <Col 
      md="12" 
      lg="6"
      xl="4"
      className="NoteCard" 
      key={note.id}
    >
      {/* <Link to={{ pathname: `/viewnote/${note.id}`, state: { viewNote: {note} } }} className="CardLink"> */}
        <Card className="Card">
          <CardBody className="CardContent">
            <CardTitle className="CardTitle">{note.title}</CardTitle>
            <CardText className="CardText">
              { contentLength.length >= 17 ? `${contentLength.slice(0, 17).join(" ")} ...` : note.content }
            </CardText>
          </CardBody>
        </Card>
      {/* </Link> */}
    </Col>
  )
}