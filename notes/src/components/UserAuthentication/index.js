import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import "./UserAuthentication.css";
import SignIn from "../SignIn";
import SignUp from "../SignUp";

class UserAuthentication extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "1"
    };
  }

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };
  render() {
    return (
      <div className="auth-container">
        {this.props.loggedIn ? (
          <Redirect to={`dashboard/${this.props.user.id}`} />
        ) : null}
        <h1>Join Lambda Notes</h1>
        <div className="auth-nav">
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "1" })}
                onClick={() => {
                  this.toggle("1");
                }}
              >
                Sign In
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "2" })}
                onClick={() => {
                  this.toggle("2");
                }}
              >
                Sign Up
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <SignIn />
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="12">
                  <SignUp />
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.authReducer.loggedIn,
    user: state.authReducer.user
  };
};

export default connect(
  mapStateToProps,
  {}
)(UserAuthentication);
