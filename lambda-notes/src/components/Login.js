import React, { Component } from 'react';
import { Button } from 'reactstrap';
import logo from '../assets/logo.png';
import { Redirect } from "react-router-dom";

///problem is this is bound to app.js when it needs to set the state of this component

class Login extends Component {
  state = {
    message: "Enter your username and password"
  }

  newMessage2 = (username, returnMessage) => {
    console.log(returnMessage);
    if (returnMessage) {
      this.setState({ username: username });
      this.props.history.push('/notes');
    }
    if(returnMessage === 422) {
      const field = document.querySelectorAll("#usernamefield")[0];
      field.style.border = "2px solid #A0001E";
      this.setState({ message: "A user with that name already exists!"})
      console.log(this.state.message);
    }
    else {
      const logo = document.querySelectorAll("#lnlogo")[0];
      logo.classList.toggle("spin");
      this.setState({ message: "Something went wrong: Server Gnomes drank too much last night"})
    }
  }

  newMessage = (username, returnMessage) => {
    if (returnMessage) {
      this.setState({ username: username });
      this.props.history.push('/notes');
    }
    if(returnMessage === 404) {
      const field = document.querySelectorAll("#usernamefield")[0];
      field.style.border = "2px solid #A0001E";
      this.setState({ message: "Couldn't find that user.. try making a new one"})
    }
    if(returnMessage === 422) {
      const field = document.querySelectorAll("#passwordfield")[0];
      field.style.border = "2px solid #A0001E";
      this.setState({ message: "Incorrect password!"})
    }
    else {
      const logo = document.querySelectorAll("#lnlogo")[0];
      logo.classList.toggle("spin");
      this.setState({ message: "Something went wrong: Server Gnomes drank too much last night"})
    }
  }

  handleLogin = (e) => {
    const username = e.target.parentNode.parentNode.getElementsByTagName("input")[0].value;
    const password = e.target.parentNode.parentNode.getElementsByTagName("input")[1].value;
    if (username && password) {
      this.setState({ message: "The server gnomes are working.."})
      //animation
      const logo = document.querySelectorAll("#lnlogo")[0];
      logo.classList.toggle("spin");

      this.props.login(username, password, this.newMessage);
    }
    else { 
        if (!username) {
          e.target.parentNode.parentNode.getElementsByTagName("input")[0].style.border = "2px solid #A0001E";
          this.setState({ message: "Hey! You left these empty!"})
      }
        if (!password) {
          e.target.parentNode.parentNode.getElementsByTagName("input")[1].style.border = "2px solid #A0001E";
          this.setState({ message: "Hey! You left these empty!"})
      }
    }
};

  handleCreate = (e) => {
    const username = e.target.parentNode.parentNode.parentNode.getElementsByTagName("input")[0].value;
    const password = e.target.parentNode.parentNode.parentNode.getElementsByTagName("input")[1].value;
    if (username && password) {
      this.setState({ message: "The server gnomes are creating you an account.."})
      //animation
      const logo = document.querySelectorAll("#lnlogo")[0];
      logo.classList.toggle("spin");

      this.props.signup(username, password, this.newMessage2);
    }
    else { 
      if (!username) {
        e.target.parentNode.parentNode.getElementsByTagName("input")[0].style.border = "2px solid #A0001E";
        this.setState({ message: "Hey! You left these empty!"})
    }
      if (!password) {
        e.target.parentNode.parentNode.getElementsByTagName("input")[1].style.border = "2px solid #A0001E";
        this.setState({ message: "Hey! You left these empty!"})
    }
  }
};


  render() {

    this.newMessage = this.newMessage.bind(this);
    this.newMessage2 = this.newMessage2.bind(this);

    const redirect = this.props.isAuth ? <Redirect to="/notes" /> : null;

    return (
      <div className="LoginPage">
      <div> {redirect} </div>
      <img id="lnlogo" src={logo} alt="logo" style={{width: "120px", height: "120px", margin: "4% auto"}} />
        <div style={{margin: "1% 0", fontSize: "20px", fontWeight: "500"}}>
          {this.state.message}
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
            <div style={ { fontSize: "12px" } }>Don't have an account?</div>
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