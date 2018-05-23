import React from "react";
import { connect } from "react-redux";
import { googleLogin } from "../actions/userAction";


class Login extends React.Component {

  render() {
    return <button
            onClick={this.props.googleLogin}
           >Sign in with google</button>;
  }
}

export default connect(null, { googleLogin })(Login);