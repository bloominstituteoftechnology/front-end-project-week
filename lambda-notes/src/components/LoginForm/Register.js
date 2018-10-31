import React from "react";
import axios from "axios";

class Register extends React.Component {
  constructor() {
    super();
    this.state = { username: "", password: "" };
  }

  handleInput(e) {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password
    };
    if (!user.username || !user.password) {
      alert("Please sign in ");
    }
    const url =
      "https://lambda-notes-backend-project.herokuapp.com/api/users/register";
    axios
      .post(url, user)
      .then(response => {
        console.log(response.data);
        localStorage.setItem("jwt", response.data.token);
        window.location.reload();
      })
      .catch(err => console.log(err));

    this.setState({ username: "", password: "" });
  }
  render() {
    return (
      <div className="login-form">
        <h1>Please Register</h1>
        <form>
          <input
            type="text"
            name="username"
            value={this.state.username}
            placeholder="Username"
            onChange={e => this.handleInput(e)}
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={e => this.handleInput(e)}
            placeholder="Password"
          />
          <button onClick={e => this.handleSubmit(e)}>Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
