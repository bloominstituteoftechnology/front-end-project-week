import React, { Component } from "react";
import { Col, Nav, NavItem, Button } from "reactstrap";

const buttonStyles = {
  width: "100%",
  backgroundColor: "#2BC1C5",
  marginTop: "15px"
};

export default class NavPannel extends Component {
  render() {
    return (
      <Col>
        <h1 className="text-justify">Lambda</h1>
        <h1 className="text-justify">Notes</h1>
        <Nav vertical style={{ border: "1px solid black" }}>
          <NavItem>
            <Button style={buttonStyles}>View Your Notes</Button>
          </NavItem>
          <NavItem>
            <Button style={buttonStyles}>+ Create New Note</Button>
          </NavItem>
        </Nav>
      </Col>
    );
  }
}
