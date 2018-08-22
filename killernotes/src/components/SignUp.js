import React from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class SignUp extends React.Component {
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
    // the signup endpoint wants a user object {username, password}
    const { username, password } = this.state;
    const USER = { username, password };
    axios
      .post('http://localhost:3000/api/register', USER)
      .then(res => {
        // we're sent a JWT token
        const { token, username, userId } = res.data;
        // stash it for later use
        localStorage.setItem('jwt', token);
        localStorage.setItem('username', username);
        localStorage.setItem('id', userId);
        this.setState({ username: '', password: '' });
        this.props.history.push('/notes');
      })
      .catch(err => {
        if (err.response.data.includes('UNIQUE')) {
          this.setState({
            error: 'That user already exists. Please choose another.',
            username: '',
            password: '',
          });
        } else {
          this.setState({ error: err.response.data.error });
        }
        this.toggle();
        // console.error('axios err:', err);
        console.log('ERR?', err.response.data);
      });
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
          <button type="submit">Register</button>
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
      </form>
    );
  }
}

export default SignUp;
