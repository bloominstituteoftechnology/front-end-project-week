import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Nav, NavItem, Navbar, Tooltip,
  NavbarBrand, NavbarToggler, Collapse, NavLink,
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import { toggleNight, listViews, getNotes } from '../REDUX/actions';
import { ShowAt, HideAt } from 'react-with-breakpoints';
import styled from 'styled-components';
import { CSVLink } from 'react-csv';

const Wrapper = styled.section`text-decoration-line: none; width: 100%;`;

class NavColumn extends Component {
  constructor() {
    super();
    this.state = { 
      collapsed: true,
      viewOpen: false,
      isOpen: false,
      exportOpen: false,
      tooltipOpen: false
    }
  }

  componentDidMount() { this.props.getNotes() }

  handleCSV = () => {
    const headers = [ { label: "Note ID", key: "id" }, { label: "Title", key: "title" }, { label: "Content", key: "content" } ];
    const data = this.props.notes.map(note => ({ id: note.id, title: note.title, content: note.content }));
    return (
      <CSVLink data={data} headers={headers} filename={"my-notes.csv"} id="CSV-Tooltip">
        <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="CSV-Tooltip" toggle={() => this.setState({ tooltipOpen: !this.state.tooltipOpen })}>
          Mozilla Firefox is recommended.
        </Tooltip>
        <Button className="Nav__ButtonsContainer--navButton px-0">Export Notes to CSV</Button>
      </CSVLink>
    )
  }

  render() {
    const headers = [ { label: "Note ID", key: "id" }, { label: "Title", key: "title" }, { label: "Content", key: "content" } ];
    const data = this.props.notes.map(note => ({ id: note.id, title: note.title, content: note.content }));
    return (
      <div className="Nav__Container">
        <HideAt breakpoint="small" className="position-relative">
          <Link to="/home" className="Nav__Header--link"><h1 className="Nav__Header pr-2">Lambda <br/> Notes</h1></Link>
          <Nav vertical className="Nav__ButtonsContainer">
            <NavItem className="col-12 p-0">
              {!this.props.isHome ? (
                <Link to="/home">
                  <Button className="Nav__ButtonsContainer--navButton px-0">View Your Notes</Button>
                </Link>
              ) : (
                <Link to="/home">
                  <ShowAt breakpoint="medium" breakpoints={{small: 744, medium: 992, large: Infinity}}>
                    <Button className="Nav__ButtonsContainer--navButton px-0">View Your Notes</Button>
                  </ShowAt>
                  <HideAt breakpoint="medium" breakpoints={{small: 744, medium: 992, large: Infinity}}>
                    <Dropdown group 
                      isOpen={this.state.viewOpen} 
                      className="w-100"
                      toggle={() => this.setState({ viewOpen: !this.state.viewOpen })}>
                      <Wrapper>
                        <DropdownToggle caret className="Nav__ButtonsContainer--navButton">View Your Notes</DropdownToggle>
                      </Wrapper>
                      <DropdownMenu className="w-100 text-center">
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
              )}
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
            <NavItem className="col-12 p-0">
              {this.handleCSV()}
            </NavItem>
          </Nav>
        </HideAt>
        <ShowAt breakpoint="small">
          <Navbar className={`d-flex justify-content-space-between NavRow ${this.state.collapsed ? "" : "pb-0"}`} light>
            <Link to="/home" className="Nav__Header">Lambda Notes</Link>
            <NavbarToggler onClick={() => this.setState({ collapsed: !this.state.collapsed })} className="" />
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar className="Nav__ButtonsContainer">
                <Link to="/home" className="p-0 NavRow__Link" onClick={() => this.setState({ collapsed: !this.state.collapsed })}>
                  <NavItem>View Your Notes</NavItem>
                </Link>
                <Link to="/create" className="p-0 NavRow__Link" onClick={() => this.setState({ collapsed: !this.state.collapsed })}>
                  <NavItem>+ Create New Note</NavItem>
                </Link>
                <Link to="/markdown" className="p-0 NavRow__Link" onClick={() => this.setState({ collapsed: !this.state.collapsed })}>
                  <NavItem>Markdown Editor</NavItem>
                </Link>
                {/* <Link to="/markdown" className="p-0 NavRow__Link" onClick={() => this.setState({ collapsed: !this.state.collapsed })}> */}
                <CSVLink data={data} headers={headers} filename={"my-notes.csv"} id="CSV-Tooltip" className="p-0 NavRow__Link">
                  <NavItem>Export Notes to CSV</NavItem>
                </CSVLink>
              </Nav>
            </Collapse>
          </Navbar>
        </ShowAt>
      </div>
    )
  }
}

const mapStateToProps = state => ({ 
  notes: state.notes,
  night: state.night, 
  listView: state.listView,
  isHome: state.isHome
});

export default connect(mapStateToProps, { toggleNight, listViews, getNotes })(NavColumn);
