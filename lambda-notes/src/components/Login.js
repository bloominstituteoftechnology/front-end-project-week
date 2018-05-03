import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Login extends Component {

  handleLogin = (e) => {
    const username = e.target.parentNode.parentNode.getElementsByTagName("input")[0].value;
    const password = e.target.parentNode.parentNode.getElementsByTagName("input")[1].value;
    if (username && password) {
        //start animation
        this.props.login(username, password, (success) => {
            if (success) {
                const name = username.charAt(0).toUpperCase() + username.slice(1);
                this.setState({ modal: false, username: name });
                this.props.history.push('/notes');
            }
            else {
                console.log('e')
                //change colors on incorrect form
            }
        })
    }
    else { 
        if (!username) e.target.parentNode.parentNode.getElementsByTagName("input")[0].style.border = "1px solid red";
        if (!password) e.target.parentNode.parentNode.getElementsByTagName("input")[1].style.border = "1px solid red";
    }
};

  handleCreate = (e) => {
    const username = e.target.parentNode.parentNode.parentNode.getElementsByTagName("input")[0].value;
    const password = e.target.parentNode.parentNode.parentNode.getElementsByTagName("input")[1].value;
    if (username && password) {
        this.props.signup(username, password, () => {
            const name = username.charAt(0).toUpperCase() + username.slice(1);
            this.setState({ modal: false, username: name });
            this.props.history.push('/notes');
        });
    }
    else { 
        if (!username) e.target.parentNode.parentNode.parentNode.getElementsByTagName("input")[0].style.border = "1px solid red";
        if (!password) e.target.parentNode.parentNode.parentNode.getElementsByTagName("input")[1].style.border = "1px solid red";
    }
};


  render() {
    return (
      <div>
        <div>
            Enter your username and password
        </div>
        <div>
            <div>
            <div><div>Username:</div><input name="username"></input></div>
            <div><div>Password:</div><input type="password" name="password"></input></div>
            </div>
        </div>
        <div>
          <Button className="Button" onClick={this.handleLogin}>Log In</Button>
          <div>
            <div style={ { fontSize: "12px" } }>Don't have an account?</div>
            <Button onClick={this.handleCreate}>Create Account</Button>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.isLoggedIn();
  }

}

export default Login;