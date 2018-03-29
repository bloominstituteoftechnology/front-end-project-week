import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <Container className="container">
        <Row>
          <div className="SidebarText"> Lambda Notes </div>
        </Row>
        <div className="SidebarButtons">
          <Row className="buttonRow1">
            <Link to={"/"}>
              <Button color="primary" className="ButtonSide"> View Your Notes </Button>
            </Link>
          </Row>
          <Row classname="buttonRow2">
            <Link to={"/CreateNew"}>
              <Button color="primary" className="ButtonSide"> + Create New Note </Button>{' '}
            </Link>
          </Row>
        </div>
      </Container>
    );
  }
}

export default Sidebar;
