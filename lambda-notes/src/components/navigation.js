import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Nav, NavItem, Navbar, NavbarBrand, NavbarToggler, Collapse, NavLink } from 'reactstrap';
import { toggleNight } from '../REDUX/actions';
import { ShowAt, HideAt } from 'react-with-breakpoints';

class NavColumn extends Component {
  constructor() {
    super();
    this.state = { collapsed: true }
  }
  render() {
    return (
      <div className="Nav__Container">
        <HideAt breakpoint="small">
          <h1 className="Nav__Header pr-2">Lambda <br/> Notes</h1>
          <Nav vertical className="Nav__ButtonsContainer">
            <NavItem className="col-12 p-0">
              <Link to="/">
                <Button className="Nav__ButtonsContainer--navButton px-0">View Your Notes</Button>
              </Link>
            </NavItem>
            <NavItem className="col-12 p-0">
              <Link to="/create">
                <Button className="Nav__ButtonsContainer--navButton px-0">+ Create New Note</Button>
              </Link>
            </NavItem>
            <NavItem className="col-12 p-0">
              <Link to="/markdown">
                <Button className="Nav__ButtonsContainer--navButton px-0">Markdown Editor</Button>
              </Link>
            </NavItem>
          </Nav>
        </HideAt>
        <ShowAt breakpoint="small">
          <Navbar className={`d-flex justify-content-space-between NavRow ${this.state.collapsed ? "" : "pb-0"}`} light>
            <Link to="/"><NavbarBrand className="Nav__Header">Lambda Notes</NavbarBrand></Link>
            <NavbarToggler onClick={() => this.setState({ collapsed: !this.state.collapsed })} className="" />
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar className="Nav__ButtonsContainer">
                <Link to="/" className="p-0 NavRow__Link" onClick={() => this.setState({ collapsed: !this.state.collapsed })}>
                  <NavItem>View Your Notes</NavItem>
                </Link>
                <Link to="/create" className="p-0 NavRow__Link" onClick={() => this.setState({ collapsed: !this.state.collapsed })}>
                  <NavItem>+ Create New Note</NavItem>
                </Link>
                <Link to="/markdown" className="p-0 NavRow__Link" onClick={() => this.setState({ collapsed: !this.state.collapsed })}>
                  <NavItem>Markdown Editor</NavItem>
                </Link>
              </Nav>
            </Collapse>
          </Navbar>
        </ShowAt>
      </div>
    )
  }
}

const mapStateToProps = state => ({ night: state.night });

export default connect(mapStateToProps, { toggleNight })(NavColumn);