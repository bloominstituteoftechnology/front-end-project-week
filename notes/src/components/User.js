import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { logout } from "../utilities/auth";
import { Button, Row, Col } from "reactstrap";

function mapStateToProps(state) {
  return {};
}

class User extends Component {
  state = {
    content: <div>Loading</div>,
    user: this.props.user.email || "You are signed out."
  };
  render() {
    return this.props.authed ? (
      <Col>
        {/* You are signed in. as: {this.props.user.email} */}
        You are signed in.{" "}
        <Button className="ml-3" onClick={logout}>
          LogOut
        </Button>
      </Col>
    ) : (
      <p>You are signed out.</p>
    );
  }
  componentDidMount() {
    this.setState({ user: this.props.user.email });
  }
}

export default connect(mapStateToProps)(User);
