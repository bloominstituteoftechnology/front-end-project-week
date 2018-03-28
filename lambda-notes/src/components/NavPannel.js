import React, { Component } from "react";
import { Col, Nav, NavItem, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../actions/signOut";

const buttonStyles = {
  width: "100%",
  backgroundColor: "#2BC1C5",
  marginTop: "15px"
};

class NavPannel extends Component {
  render() {
    return (
      <Col>
        <h1 className="text-justify">Lambda</h1>
        <h1 className="text-justify">Notes</h1>
        <Nav vertical>
          <NavItem>
            <Link to="/">
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
              className={this.props.loggedIn ? null : "d-none"}
              style={buttonStyles}
              onClick={() => {
                this.props.signOut();
              }}
            >
              Sign Out
            </Button>
          </NavItem>
        </Nav>
      </Col>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn
  };
};

export default connect(mapStateToProps, { signOut })(NavPannel);
