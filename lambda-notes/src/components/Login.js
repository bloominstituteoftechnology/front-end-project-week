import React from "react";
import { connect } from "react-redux";
import { googleLogin } from "../actions/userAction";


class Login extends React.Component {

  render() {
    return (
      <div className="login-page">
        <div className="login-wrapper">
          <h1>Welcome To Lambda Note Taking App</h1>
          <p>Please login with your google account</p>
          <button
                onClick={this.props.googleLogin}
          >Sign in with google</button>
        </div>
      </div>
    )
  }
}

export default connect(null, { googleLogin })(Login);