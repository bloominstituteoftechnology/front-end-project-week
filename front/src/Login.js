import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emails: "",
      password: ""
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeEmail = event => {
    this.setState({ email: event.target.value });
  };
  handleChangePassword = event => {
    this.setState({ password: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const addUser = {
      email: this.state.email,
      password: this.state.password
    };

    axios
      .post("https://backend-project-week.herokuapp.com/api/users", addUser)
      .then(response => {
        console.log(response, "email and password saved");
      })
      .catch(err => {
        console.log(err, "sorry, email and password not saved, try again ");
      });

    
      this.setState({
        email: "",
        password: ""
      });
    };
   
      
  

  render() {
    return (
      <div className="container">
        <div className="button3">
          <h1>Lambda Notes</h1>
          
        </div>
        <form>
          <input
            class="kin"
            type="email"
            placeholder="Enter your email"
            value={this.state.email}
            onChange={this.handleChangeEmail}
          />
          <br />
          <input
            class="kin"
            type="password"
            placeholder="Enter your password"
            value={this.state.password}
            onChange={this.handleChangePassword}
          />
          <br />

          <button onClick={this.onClick}>Login button </button>
        </form>
      </div>
    );
  }
}
export default Login;
