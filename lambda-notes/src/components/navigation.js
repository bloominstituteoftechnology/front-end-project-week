import React from 'react';
import { Container, Row, Col, Button, Nav, NavItem, NavLink } from 'reactstrap';

export default class Navigation extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="3"><h1>Lambda Notes</h1></Col>
        </Row>
        <Row>
          <Col xs="3">
            <Nav vertical>
              <NavItem>
                <Button className="button" color="info" size="md" block href="#">View Your Notes</Button>{' '}
              </NavItem>
              <NavItem>
                <Button className="button" color="info" size="md" block href="#">+ Create New Note</Button>{' '}
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>
    )
  }
}