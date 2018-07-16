import React from "react";
import { Col, Nav, NavItem } from "reactstrap";
import VerticalNavButton from "./VerticalNavButton";

export default class VerticalNav extends React.Component {
  render() {
    return (
      <Col xs="3">
        <h1>Lambda Notes</h1>
        <Nav vertical>
          <NavItem>
            <VerticalNavButton text="View Your Notes" />
          </NavItem>
          <NavItem>
            <VerticalNavButton text="+ Create New Note" />
          </NavItem>
        </Nav>
      </Col>
    );
  }
}
