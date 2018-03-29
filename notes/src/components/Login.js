import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { login, resetPassword } from "../utilities/auth";

function mapStateToProps(state) {
  return {};
}
const auth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};
class Login extends Component {
  state = {
    redirect: true
  };
  login = () => {
    auth.authenticate(() => {
      this.setState(() => ({ redirect: true }));
    });
  };
  render() {
    return (
      <div>
        Login
        <Button onClick={() => {}} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Login);
