import React, { Component } from 'react'
import './index.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
axios.defaults.withCredentials = true;


export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      denied: false
    }
  }

  handleSubmit = () => {
    axios
      .post(`http://localhost:8000/api/register`, {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log('response', response)
        localStorage.setItem('token', response.data)
        this.props.history.push('/');
      })
      .catch(err => this.setState({ denied: true }));
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.denied ? <h4 className="text-center text-danger">Both username and password are required</h4> : null}
        <div className="form-group container w-50">
          <h3 className="header mt-2">Register</h3>
          <input
            name='username'
            type='text' 
            className="form-control"
            placeholder="Username"
            onChange={(e) => this.handleChange(e)}
          /><br />
          <input
            name='password' 
            type='password'
            className="form-control"
            placeholder="password"
            onChange={(e) => this.handleChange(e)}
          /><br />
          <button 
            type="submit" 
            className="btn btn-info"
            onClick={() => this.handleSubmit()}
          >
            Save
          </button>
          {<Link to="/login" style={{ textDecoration: 'none' }}>
            <button type='button' className="btn btn-link text-primary underline">Login here</button>
          </Link>}
        </div>
      </div>
    )
  }
}