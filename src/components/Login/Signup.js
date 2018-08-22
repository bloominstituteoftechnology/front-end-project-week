import React from "react";
import axios from "axios";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }
  addSignup = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  submitSignup = event => {
    event.preventDefault();
    const newUser = {
      username: this.state.username,
      password: this.state.password
    };
    axios
      .post(`${process.env.REACT_APP_API}/api/register`, newUser)
      .then(response => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <form>
        <h2>Register</h2>
        <input onChange={this.addSignup} name="username" placeholder="Create a username" />
        <input
          onChange={this.addSignup}
          name="password"
          placeholder="Create a password"
          type="password"
        />
        <input onChange={this.addSignup} name="department" placeholder="Create a department" />
        <button onClick={this.submitSignup}>Submit</button>
      </form>
    );
  }
}

export default Signup;
