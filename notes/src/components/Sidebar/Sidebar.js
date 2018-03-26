import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return(
      <Container className="container">
        <Row>
          <div className="SidebarText"> Lambda Notes </div>
        </Row>
        <div className="SidebarButtons">
          <Row className="buttonRow1">
            <Button color="primary" className="Button1"> View Your Notes </Button>{' '}
          </Row>
          <Row classname="buttonRow2">
            <Button color="primary" className="Button2"> + Create New Note </Button>{' '}
          </Row>
        </div>
      </Container>
    );
  }
}

export default Sidebar;
