import React from "react";
import { Link } from "react-router-dom";
import { Card, CardText, CardBody, CardHeader, Col, Row } from "reactstrap";

const Note = props => {
  const { title, content } = props.note;
  return (
    <div className='note__card'>
      {/* <Row>
        <Col > */}
          <Card >
            <CardBody>
              <CardHeader tag="h4">
                <Link to={`/note/${props.note.id}`}>{title}</Link>
              </CardHeader>
              <CardText>{content}</CardText>
            </CardBody>
          </Card>
        {/* </Col>
      </Row> */}
    </div>
  );
};

export default Note;
