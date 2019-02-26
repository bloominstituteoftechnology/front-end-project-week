import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const Note = (props) => {
  return (
    <Row>
      <Col sm="6">
        <Card body>
          <CardTitle>{props.title}</CardTitle>
          <CardText>{props.body}</CardText>
          <Button>More...</Button>
        </Card>
      </Col>
    </Row>
  );
};

export default Note;