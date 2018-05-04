import React, { Component } from 'react';
import { Button } from 'reactstrap';
import logo from '../assets/logo.png';
import { Redirect } from "react-router-dom";


class Login extends Component {
  state = {
    message: "Enter your username and password"
  }

  handleLogin = (e) => {
    const username = e.target.parentNode.parentNode.getElementsByTagName("input")[0].value;
    const password = e.target.parentNode.parentNode.getElementsByTagName("input")[1].value;
    if (username && password) {
      this.setState({ message: "The server gnomes are working.."})
              //animation
      const logo = document.querySelectorAll("#lnlogo")[0];
      logo.classList.toggle("spin");

        this.props.login(username, password, (returnMessage) => {
          console.log(returnMessage)
            if (returnMessage) {
              console.log(1)
                const name = username.charAt(0).toUpperCase() + username.slice(1);
                this.setState({ modal: false, username: name });
                this.props.history.push('/notes');
            }
            else {
                if(returnMessage.toString() === "Request failed with status code 404") {
                  console.log(2)

                  this.setState({ message: "Couldn't find that user.. try making a new one"})
                  e.target.parentNode.parentNode.getElementsByTagName("input")[0].style.border = "2px solid #A0001E";
                }
                else if(returnMessage.toString() === "Request failed with status code 422") {
                  console.log(3)

                  this.setState({ message: "Incorrect password!"})
                  e.target.parentNode.parentNode.getElementsByTagName("input")[1].style.border = "2px solid #A0001E";
                }
                else this.setState({ message: "Something went wrong: Server Gnomes drank too much last night"})
                logo.classList.toggle("spin");
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
      this.setState({ message: "The server gnomes are creating you an account.."})
      //animation
      const logo = document.querySelectorAll("#lnlogo")[0];
      logo.classList.toggle("spin");

      this.props.signup(username, password, (returnMessage) => {
        console.log(returnMessage)

        if (returnMessage) {
          const name = username.charAt(0).toUpperCase() + username.slice(1);
          this.setState({ modal: false, username: name });
          this.props.history.push('/notes');
        }
        else {
          if(returnMessage.toString() === "Request failed with status code 422") {    
                      console.log(1)

            this.setState({ message: "A user with that name already exists!"})
            e.target.parentNode.parentNode.getElementsByTagName("input")[1].style.border = "2px solid #A0001E";
          }
          else this.setState({ message: "Something went wrong: Server Gnomes drank too much last night"})
          logo.classList.toggle("spin");
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
            <div id="usernamefield"><div>Username:</div><input name="username"></input></div>
            <div id="passwordfield"><div>Password:</div><input type="password" name="password"></input></div>
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