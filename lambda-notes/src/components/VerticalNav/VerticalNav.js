import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Nav, NavItem } from "reactstrap";

import VerticalNavButton from "./VerticalNavButton";

export default class VerticalNav extends React.Component {
  render() {
    return (
      <Col xs="3">
        <h1>Lambda Notes</h1>
        <Nav vertical>
          <NavItem>
            <NavLink to="/list-view">
              <VerticalNavButton text="View Your Notes" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/create-new-view">
              <VerticalNavButton text="+ Create New Note" />
            </NavLink>
          </NavItem>
        </Nav>
      </Col>
    );
  }
}
