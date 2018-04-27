import React from 'react';
import { Card, CardText, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

const Note = props => {
  const { title, content } = props.note;
  return (
    // <div className="note">
    <div>
      <Row>
        <Col sm={{ size: 'auto', offset: 1 }}>
          <Card>
            <CardBody>
              <CardHeader tag="h4">
                <Link to={`/${props.note.id}`}>{title}</Link>
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
