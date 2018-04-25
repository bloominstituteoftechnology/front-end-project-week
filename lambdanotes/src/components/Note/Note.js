import React from "react";
import { Link } from "react-router-dom";
import { Card, CardText, CardBody, CardHeader, Col, Row } from "reactstrap";

const Note = props => {
  const { title, content } = props.note;
  return (
    <div>
      <Row>
        <Col>
          <Card>
            <CardBody>
              <CardHeader tag="h4">
                {title}
              </CardHeader>
              <CardText>{content}</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Note;
