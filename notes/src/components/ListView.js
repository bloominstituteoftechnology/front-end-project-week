import React from 'react';
import { Card, Button, CardBody, CardTitle, CardSubtitle, CardText, Row, Col } from 'reactstrap';

// const ListView = () => <h1>List view</h1>;
// <div>

// </div>


const ListView = () => {

  
    return (
      <div className="note-container">
          <Row>
          <Col sm="4">
            <CardBody>
              <CardTitle>Lorem Ipsum</CardTitle>
              <CardText>Lorem Ipsum Lorem Ipsum Lorem Ipsum.</CardText>
            </CardBody>
          </Col>
          <Col sm="4">
            <CardBody>
              <CardTitle>Lorem Ipsum</CardTitle>
              <CardText>Lorem Ipsum Lorem Ipsum Lorem Ipsum.</CardText>
            </CardBody>
          </Col>
          <Col sm="4">
            <CardBody>
              <CardTitle>Lorem Ipsum</CardTitle>
              <CardText>Lorem Ipsum Lorem Ipsum Lorem Ipsum.</CardText>
            </CardBody>
          </Col>
        </Row>
    </div>
    );
  };

export default ListView ;