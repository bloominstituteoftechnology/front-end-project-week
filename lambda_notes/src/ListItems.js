import React, { Component } from 'react';
import { Card, CardText, CardSubtitle, CardBody,
  CardTitle, Button } from 'reactstrap';
  import { Container, Row, Col } from 'reactstrap';
  import { Link } from 'react-router-dom';
  import SideNav from'./SideNav';


export default class ListItems extends Component {
  constructor() {
    super();
  }

  render () {
    return (
      <Row>
      <Col>
        <Card body>
          <CardTitle>Note Title</CardTitle>
          <CardText>Note Content</CardText>
          <Button>Button</Button>
          </Card>
      </Col>
    </Row>
  )
  }
}
















