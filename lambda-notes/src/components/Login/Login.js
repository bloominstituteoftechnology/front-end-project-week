import React from "react";
import "./Login.css";

import App from "../../App";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  changeHandler = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  render() {
    return (
      <div className="login-page">
        <div className="login-box">
          <h1>
            Lambda
            <br />
            Notes
          </h1>
          <div className="login-sub">
            <p>
              A note taking app I built for Front End Project Week at Lambda
              School
            </p>
            <a
              href="https://github.com/gsamaniego41/front-end-project-week"
              target="_blank"
            >
              <i class="fab fa-github" />
            </a>
          </div>
        </div>
        <form
          onSubmit={e => this.props.login(e, this.state.username)}
          className="login-form"
        >
          <input
            type="text"
            name="username"
            onChange={this.changeHandler}
            placeholder="Username"
            value={this.state.username}
          />
          <br />
          <input
            type="password"
            name="password"
            onChange={this.changeHandler}
            placeholder="Password"
            value={this.state.password}
          />
          <br />
          <button>Log in</button>
          <img
            src="https://www.afgri.co.za/wp-content/uploads/2018/07/AppStoreLogo.png"
            alt="Google Play App Store"
          />
        </form>
      </div>
    );
  }
}

export default Login;
