import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Nav, NavItem, Navbar, 
  NavbarBrand, NavbarToggler, Collapse, NavLink,
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import { toggleNight, listViews } from '../REDUX/actions';
import { ShowAt, HideAt } from 'react-with-breakpoints';

class NavColumn extends Component {
  constructor() {
    super();
    this.state = { 
      collapsed: true,
      viewOpen: false,
    }
  }
  render() {
    // this.props.breakpoints = {large: Infinity, medium: 992, small: 744};
    console.log(this.props)
    return (
      <div className="Nav__Container">
        <HideAt breakpoint="small" className="position-relative">
          <h1 className="Nav__Header pr-2">Lambda <br/> Notes</h1>
          <Nav vertical className="Nav__ButtonsContainer">
            <NavItem className="col-12 p-0">
              <Link to="/">
                <ShowAt breakpoint="medium" breakpoints={{small: 744, medium: 992, large: Infinity}}><Button className="Nav__ButtonsContainer--navButton px-0">View Your Notes</Button></ShowAt>
                <HideAt breakpoint="medium" breakpoints={{small: 744, medium: 992, large: Infinity}}>
                  <Dropdown group 
                    isOpen={this.state.viewOpen} 
                    className="w-100"
                    toggle={() => this.setState({ viewOpen: !this.state.viewOpen })}>
                    <DropdownToggle caret className="Nav__ButtonsContainer--navButton">View Your Notes</DropdownToggle>
                    <DropdownMenu className="w-100">
                      <DropdownItem 
                        className={this.props.listView ? "" : "active"}
                        onClick={() => this.props.listViews() }
                        
                      >Card</DropdownItem>
                      <DropdownItem 
                        className={this.props.listView ? "active" : ""}
                        onClick={() => this.props.listViews() }
                        
                      >List</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </HideAt>
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

const mapStateToProps = state => ({ night: state.night, listView: state.listView });

export default connect(mapStateToProps, { toggleNight, listViews })(NavColumn);
