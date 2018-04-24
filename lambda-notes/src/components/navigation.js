import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Nav } from 'reactstrap';
import { toggleNight } from '../REDUX/actions';

class NavColumn extends Component {
  render() {
    return (
      <div className={this.props.night ? "Nav__Container--dark" : "Nav__Container"}>
        <h1 className={this.props.night ? "Nav__Header--dark" : "Nav__Header"}>Lambda Notes</h1>
        <Nav vertical className="Nav__ButtonsContainer">
          <Link to="/">
           <Button className={this.props.night ? "Nav__ButtonsContainer--navButtonDark" : "Nav__ButtonsContainer--navButton"}>View Your Notes</Button>
          </Link>
          <Link to="/create">
           <Button className={this.props.night ? "Nav__ButtonsContainer--navButtonDark" : "Nav__ButtonsContainer--navButton"}>+ Create New Note</Button>
          </Link>
          <Button className={this.props.night ? "Nav__ButtonsContainer--navButtonDark" : "Nav__ButtonsContainer--navButton"} onClick={() => this.props.toggleNight()}>Toggle Night Mode</Button>
        </Nav>
      </div>
    )
  }
}

const mapStateToProps = state => ({ night: state.night });

export default connect(mapStateToProps, { toggleNight })(NavColumn);