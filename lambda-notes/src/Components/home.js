import React, { Component } from "react";
import NoteForm from "./NoteForm"
import {
  Collapse,
  Button,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  DropdownItem,
  CardBody,
  Card,
  InputGroup,
  InputGroupAddon,
  Input
} from "reactstrap";
import { Link } from "react-router-dom";
class Home extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  render() {
      console.log(this.props.updateGet)
    return (
      <React.Fragment>
        <div className="home-styles">
          <Navbar fixed={"top"} color="info" light expand="md">
            <NavbarBrand  href="/">Lambda School</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.toggle}>create</NavLink>
                <Collapse isOpen={this.state.collapse}>
           <NoteForm updateGet={this.props.updateGet}/>
 
                </Collapse>
              </NavItem>
            </Nav>
          </Navbar>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;
