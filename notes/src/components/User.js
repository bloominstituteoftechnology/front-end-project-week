import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Button, Row, Col } from "reactstrap";
import { signOut } from "../actions";

function mapStateToProps(state) {
  return { authed: state.authed, user: state.user };
}

class User extends Component {
  render() {
    return (
      <Row className="d-flex justify-content-end">
        {this.props.authed ? (
          <Fragment>
            {/* You are signed in. as: {this.props.user.email} */}
            You are signed in as {this.props.user}
            <Button className="ml-3" onClick={this.props.signOut}>
              LogOut
            </Button>
          </Fragment>
        ) : (
          <p>You are signed out.</p>
        )}
      </Row>
    );
  }
}

export default connect(mapStateToProps, { signOut })(User);
