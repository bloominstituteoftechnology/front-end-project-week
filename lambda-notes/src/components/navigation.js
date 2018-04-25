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
        <HideAt breakpoint="small" className="NavColumn">
          <h1 className="Nav__Header">Lambda <br/> Notes</h1>
          <Nav vertical className="col-lg-12 col-md-8 Nav__ButtonsContainer">
            <NavItem>
              <Link to="/">
                <Button className="Nav__ButtonsContainer--navButton">View Your Notes</Button>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/create">
                <Button className="Nav__ButtonsContainer--navButton">+ Create New Note</Button>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/markdown">
                <Button className="Nav__ButtonsContainer--navButton">Markdown Editor</Button>
              </Link>
            </NavItem>
          </Nav>
        </HideAt>
        <ShowAt breakpoint="small">
          <Navbar className="d-flex justify-content-space-between pb-0 NavRow" light>
            <NavbarBrand className="Nav__Header">Lambda Notes</NavbarBrand>
            <NavbarToggler onClick={() => this.setState({ collapsed: !this.state.collapsed })} className="" />
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar className="Nav__ButtonsContainer">
                <NavItem>
                  <Link to="/" className="NavRow__Link" onClick={() => this.setState({ collapsed: !this.state.collapsed })}>
                    View Your Notes
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/create" className="NavRow__Link" onClick={() => this.setState({ collapsed: !this.state.collapsed })}>
                    + Create New Note
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/markdown" className="NavRow__Link" onClick={() => this.setState({ collapsed: !this.state.collapsed })}>
                    Markdown Editor
                  </Link>
                </NavItem>
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