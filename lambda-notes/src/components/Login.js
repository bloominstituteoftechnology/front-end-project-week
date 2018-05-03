import React, { Component } from 'react';
import { Button } from 'reactstrap';
import logo from '../assets/logo.png';

class Login extends Component {
  state = {
    message: "Enter your username and password"
  }

  handleLogin = (e) => {
    const username = e.target.parentNode.parentNode.getElementsByTagName("input")[0].value;
    const password = e.target.parentNode.parentNode.getElementsByTagName("input")[1].value;
    if (username && password) {
        //start animation
        this.props.login(username, password, (returnMessage) => {
            if (returnMessage) {
                const name = username.charAt(0).toUpperCase() + username.slice(1);
                this.setState({ modal: false, username: name });
                this.props.history.push('/notes');
            }
            else {
                console.log(returnMessage)
                //change colors on incorrect form
            }
        })
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
        this.props.signup(username, password, (returnMessage) => {
          if (returnMessage) {
            const name = username.charAt(0).toUpperCase() + username.slice(1);
            this.setState({ modal: false, username: name });
            this.props.history.push('/notes');
          }
          else {
            console.log(returnMessage)
            //change colors on incorrect form
        }
        });
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
    return (
      <div className="LoginPage">
      <img src={logo} alt="logo" style={{width: "120px", height: "120px", margin: "4% auto"}} />
        <div style={{margin: "1% 0"}}>
          {this.state.message}
        </div>
        <div>
            <div>
            <div><div>Username:</div><input name="username"></input></div>
            <div><div>Password:</div><input type="password" name="password"></input></div>
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