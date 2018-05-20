import React, { Component } from 'react';
import { Col, Nav, NavItem, Button } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../actions/signOut';

const buttonStyles = {
  width: '100%',
  backgroundColor: '#2BC1C5',
  marginTop: '15px',
};
const userStyles = {
  marginTop: '25px',
};

class NavPannel extends Component {
  render() {
    return (
      <Col>
        <h1 className="text-justify">Lambda</h1>
        <h1 className="text-justify">Notes</h1>

        <Nav vertical>
          <NavItem>
            <Link to="/notelist">
              <Button style={buttonStyles}>View Your Notes</Button>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/newnote">
              <Button style={buttonStyles}>+ Create New Note</Button>
            </Link>
          </NavItem>
          <NavItem>
            <Button
              className={this.props.loggedIn ? null : 'd-none'}
              style={buttonStyles}
              onClick={() => {
                this.props.signOut();
                this.props.history.push('/');
              }}
            >
              Sign Out
            </Button>
          </NavItem>
        </Nav>
        {this.props.activeUser && this.props.activeUser.username ? (
          <div style={userStyles}>
            <h3>User:</h3>
            <h5>{this.props.activeUser.username}</h5>
          </div>
        ) : null}
      </Col>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
    activeUser: state.activeUser,
  };
};

export default withRouter(connect(mapStateToProps, { signOut })(NavPannel));
