import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'reactstrap';
import axios from 'axios';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true,
      username: '',
      password: '',
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  clearState = event => {
    this.setState({
      username: '',
      password: '',
    });
  };

  signupUser = event => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    this.props.history.push('/');
    axios
      .post('https://peaceful-gorge-48893.herokuapp.com/api/signup', {
        username,
        password,
      })
      .then(response => {
        console.log({ Message: `Successful signup: ${response}` });
        this.clearState();
      })
      .catch(err => {
        console.log({ Error: `Unable to post new user: ${err}` });
      });
  };

  loginUser = event => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    axios
      .post('https://peaceful-gorge-48893.herokuapp.com/api/login', {
        username,
        password,
      })
      .then(response => {
        console.log({ Message: `Successful login: ${response}` });
        this.clearState();
      })
      .catch(err => {
        console.log({ Error: `Unable to login: ${err}` });
      });
  };

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className="loginModal"
          centered
        >
          <div className="formDiv">
            <form onSubmit={this.loginUser}>
              <h5>Log In:</h5>
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={this.handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
              <button onClick={this.toggle}>Log In</button>
            </form>

            <form onSubmit={this.signupUser}>
              <p>No Account? Sign Up Below:</p>
              <input
                type="text"
                name="username"
                placeholder="Create a Username"
                onChange={this.handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Create a Password"
                onChange={this.handleChange}
              />
              <button onClick={this.toggle}>Sign Up</button>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Login;
