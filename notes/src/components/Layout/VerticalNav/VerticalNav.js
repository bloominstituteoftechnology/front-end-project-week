import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import MainButton from "../MainButton/MainButton";

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Nav vertical>
          <NavItem>
            <NavLink to="/">
              <h1>Lambda Notes</h1>
            </NavLink>
          </NavItem>
          <hr />
          <NavItem>
            <NavLink to="/notes">
              <MainButton name="View Your Notes" />
            </NavLink>
          </NavItem>
          <hr />
          <NavItem>
            <NavLink to="/create">
              <MainButton name="+ Create New Note" />
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}
