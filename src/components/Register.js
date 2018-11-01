import React, { Component } from "react";
import { Input, Button } from "reactstrap";
import "./EditNote/notecard.css";
import axios from "axios";



class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    console.log(username, password);
    axios
      .post(`https://csilla-notes.herokuapp.com/api/user`, {
        username,
        password
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="register" style={{align: "center"}}>
            <h2 style={{ 
                marginLeft: "5rem"
            }}>Register</h2>
        <form onSubmit={this.handleFormSubmit}>
          <Input
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.handleInputChange}
            value={this.state.username}
            style={{ marginBottom: "1rem", marginLeft: "5rem", width: "40%", maxWidth: "300px" }}
          />
          <br />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleInputChange}
            value={this.state.password}
                    style={{ marginBottom: "1rem", marginLeft: "5rem", width: "40%", maxWidth: "300px" }}
          />
                <Button onClick={this.handleFormSubmit} color="info" type="submit" style={{
                     marginLeft: "5rem"}} className= "registerbutton">
            Register
          </Button>
        </form>
      </div>
    );
  }
}

export default Register;
