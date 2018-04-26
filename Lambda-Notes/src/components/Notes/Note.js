import React from 'react';
import { Card, CardText, CardBody, CardHeader, Col, Row } from 'reactstrap';

const Note = props => {
  const { title, content } = props.note;
  return (
    // <div className="note">
    <div>
      <Row>
        <Col sm={{ size: 4, offset: 1 }}>
          <Card>
            <CardBody>
              <CardHeader tag="h4">{title}</CardHeader>
              <CardText>{content}</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Note;
