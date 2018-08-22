import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { loggedIn } from '../actions';
import styled from 'styled-components';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const LoginForm = styled.form`
  background-color: #f3f3f3;
  padding-left: 18px;
  margin-left: 233px;
  margin-right: 20px;
  margin-top: 16px;
  word-break: break-all;
  border: 1px solid rgb(151, 151, 151);
  width: 646px;
  > p {
    margin-top: 55px;
    font-size: 22px;
    font-family: roboto;
    margin-left: 22px;
  }
`;

const loginAPI = 'https://floating-sea-10752.herokuapp.com/api/login/';
// const loginAPI = 'http://localhost:3007/api/login/';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
      modal: false,
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // the login endpoint wants a user object {username, password}
    const user = {
      username: this.state.username,
      password: this.state.password,
    };
    axios
      .post(`${loginAPI}`, user)
      .then(res => {
        // we're sent a JWT token
        const token = res.data.jwt;
        const username = res.data.username;
        const userId = res.data.id;
        // stash it for later use
        localStorage.setItem('jwt', token);
        localStorage.setItem('username', username);
        localStorage.setItem('userId', userId);
        this.props.loggedIn(username, userId);
        this.props.history.push('/notes');
      })
      .catch(err => {
        console.error('axios err:', err);
        if (err.response.data.error.includes('Unauthorized')) {
          this.setState({
            error: 'There is an error with your credentials',
            username: '',
            password: '',
          });
        } else {
          this.setState({ error: err.response.data.error });
        }
        this.toggle();
      });
    this.setState({ username: '', password: '' });
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <LoginForm onSubmit={this.handleSubmit}>
        <div>
          Username:
          <input
            type="text"
            name="username"
            onChange={this.handleInput}
            placeholder="username"
            value={this.state.username}
          />
        </div>
        <div>
          Password
          <input
            type="password"
            name="password"
            onChange={this.handleInput}
            placeholder="password"
            value={this.state.password}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
        <div>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>ERROR</ModalHeader>
            <ModalBody>{this.state.error}</ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.toggle}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </LoginForm>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    edit: state.editingNote,
  };
};

export default connect(
  mapStateToProps,
  { loggedIn },
)(Login);
