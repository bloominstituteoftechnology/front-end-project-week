// importing libraries
import React from 'react';
import styled from 'styled-components';

import { Button, Input } from '../../styled/styled';

const LoginWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: gray;
  }

  .content {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50rem;
    height: 30rem;
    background-color: white;
    padding: 4rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #424142;

    h3 {
      font-size: 2.4rem;
      margin-bottom: 2rem;
    }

    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

class LoginForm extends React.Component{
  state = {
    username: '',
    password: '',
  }

  componentWillReceiveProps(props) {
    props.loggedIn && props.history.push('/')
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onSubmit = e => {
    const { username, password } = this.state;
    e.preventDefault();
    this.props.login(username, password);
    this.setState({
      username: '',
      password: '',
    })
  }

  render() {
    const { loginSuccess } = this.props;

    return (
      <LoginWrapper>
        <div className="background"></div>
        <div className="content">
          <h3>Lambda Notes</h3>
          <form onSubmit={this.onSubmit}>
            <Input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.onChange}
              placeholder="Enter username"
            />
            <Input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
              placeholder="Enter password"
            />
            <Button type="submit">Sign In</Button>
          </form>
          { loginSuccess === false && "Login Failed"}
        </div>

      </LoginWrapper>
    );
  }
}

export default LoginForm;