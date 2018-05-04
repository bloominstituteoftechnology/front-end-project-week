import React from "react";
import axios from 'axios';

export default class Signin extends React.Component {
    state = {
      username: "placeholder",
      password: "",
      userRef: ""
    };
  
    render() {
      return (
        <form onSubmit={this.submitHandler} className="form">
          <div className="form-row">
            <label>Username</label>
            <input
              name="username"
              value={this.state.username}
              onChange={this.inputHandler}
              type="text"
            />
          </div>
          <div className="form-row">
            <label>Password</label>
            <input
              name="password"
              value={this.state.password}
              onChange={this.inputHandler}
              type="password"
            />
          </div>
          <div className="form-row">
            <button>Sign in</button>
          </div>
        </form>
      );
    }
  
  
    inputHandler = ({ target }) => {
      const { name, value } = target;
      this.setState({ [name]: value });
      console.log(this.state);
    }
  
    submitHandler = (event) => {
        event.preventDefault();
        axios.post('https://frozen-hamlet-56840.herokuapp.com/login', this.state).then(response => {
            localStorage.setItem("user._id", response.data.user._id);
            localStorage.setItem("authtoken", response.data.token);
            console.log('response', response.data)
            this.props.onSignin(response.data);
            this.props.history.push('/hobbits');
        }).catch(err => {
            console.log('ERROR BOYS!!!', err);
        })
    }
  
  }