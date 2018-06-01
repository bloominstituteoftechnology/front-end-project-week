import React, { Component } from 'react';
import { Button } from 'reactstrap';
import logo from '../logo/logo.jpg';
import { Redirect } from "react-router-dom";

class Login extends Component {

  handleLogin = (e) => {
    const username = e.target.parentNode.parentNode.getElementsByTagName("input")[0].value;
    const password = e.target.parentNode.parentNode.getElementsByTagName("input")[1].value;

    if (username && password) {
      const logo = document.querySelectorAll("#lnlogo")[0];
      logo.classList.toggle("spin");

      this.props.login(username, password, () => this.props.history.push('/notes'));
    }
    else { 
        if (!username) {
          e.target.parentNode.parentNode.getElementsByTagName("input")[0];
      }
        if (!password) {
          e.target.parentNode.parentNode.getElementsByTagName("input")[1];
      }
    }
};

  handleCreate = (e) => {
    const username = e.target.parentNode.parentNode.parentNode.getElementsByTagName("input")[0].value;
    const password = e.target.parentNode.parentNode.parentNode.getElementsByTagName("input")[1].value;

    if (username && password) {
      const logo = document.querySelectorAll("#lnlogo")[0];
      logo.classList.toggle("spin");

      this.props.signup(username, password, () => this.props.history.push('/notes'));
    }
    else { 
      if (!username) {
        e.target.parentNode.parentNode.getElementsByTagName("input")[0].style.border = "2px solid #A0001E";
    }
      if (!password) {
        e.target.parentNode.parentNode.getElementsByTagName("input")[1].style.border = "2px solid #A0001E";
    }
  }
};


  render() {
    const redirect = this.props.isAuth ? <Redirect to="/notes" /> : null;

    return (
      <div className="LoginPage">
      <div> {redirect} </div>
      <img id="lnlogo" src={logo} alt="logo" style={{width: "120px", height: "120px", margin: "4% auto"}} />
        <div>
          {this.props.message}
        </div>
        <div>
            <div>
            <div><div>Username:</div><input name="username" id="usernamefield"></input></div>
            <div><div>Password:</div><input type="password" name="password" id="passwordfield"></input></div>
            </div>
        </div>
        <div>
          <Button className="Button" onClick={this.handleLogin}>Log In</Button>
        </div>
        <div style={{position: "relative", top: "108px"}}>
            <div style={ { fontSize: "12px" } }>No Account</div>
            <Button onClick={this.handleCreate}>Create Account</Button>
          </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.isLoggedIn();
  }

}

export default Login;