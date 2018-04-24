import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Nav, NavItem } from 'reactstrap';
import { toggleNight } from '../REDUX/actions';

class NavColumn extends Component {
  render() {
    return (
      <div className="Nav__Container col-3 col-sm-0">
        <h1 className="Nav__Header">Lambda <br/> Notes</h1>
        <Nav vertical className="Nav__ButtonsContainer col-12">
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
          {/* <Button className={this.props.night ? "Nav__ButtonsContainer--navButtonDark" : "Nav__ButtonsContainer--navButton"} onClick={() => this.props.toggleNight()}>Toggle Night Mode</Button> */}
        </Nav>
      </div>
    )
  }
}

const mapStateToProps = state => ({ night: state.night });

export default connect(mapStateToProps, { toggleNight })(NavColumn);