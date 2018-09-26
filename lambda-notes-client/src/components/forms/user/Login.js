import React, { Component } from 'react';
import axios from 'axios';
import styled from "react-emotion";
import { connect } from 'react-redux';

import { updateNotes } from '../../../store/actions'; 

const Main = styled("main")`
  margin: 20px;
  padding: 20px;
  h2 {
      font-size: 2.7rem;
      font-weight: bold;
      color: #4A494A;
      margin-bottom: 10px;
    }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div {
      margin: 5px;
      label {
        font-size: 1.8rem;
        margin-right: 2px;
      }
    }
  }
`

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleOnChange = e => this.setState({ [e.target.name]: e.target.value})

  Login = e => {
    e.preventDefault();

    axios.post('http://localhost:8000/login', this.state)
    .then(res => {
      localStorage.setItem('jwt', res.data.token)
      const reqOptions = {
        headers: {
          Authorization: res.data.token,
        }
      }
      axios.get('http://localhost:8000/protected/notes', reqOptions)
      .then(res => {
        // update notes state
        this.props.isLoggedIn(true);
        this.props.updateNotesHandler(res.data);
        this.props.history.push('/notes');
      })
      .catch(err => {
        console.log(err)
      })
    })
    .catch(err => {
      console.log(err)
    })

    this.setState({username: '', password: ''})
  }

  render() {
    return (
      <Main>
        <h2>Log In</h2>
        <form onSubmit={this.Login}>
          <div>
            <label>Username</label>
            <input 
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleOnChange}
            />
          </div>
          <div>
            <label>Password</label>
            <input 
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleOnChange}
            />
          </div>
          <button type="submit">Log In</button>
        </form>
      </Main>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateNotesHandler: lePackage => {
    dispatch(updateNotes(lePackage));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Login);