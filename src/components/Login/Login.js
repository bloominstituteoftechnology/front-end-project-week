import React, { Component } from 'react'
import './index.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
axios.defaults.withCredentials = true;

export default class Login extends Component {
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
      .post(`${process.env.REACT_APP_API}/api/login`, {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('username', response.data.username);
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
        {this.state.denied ? <h4 className="text-center text-danger">That username or password was not found.</h4> : null}
        <div className="form-group container w-50">
          <h3 className="header mt-2">Login</h3>
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
            Login
          </button>

          {<Link to="/register" style={{ textDecoration: 'none' }}>
            <button type='button' className="btn btn-link text-primary underline">Register here</button>
          </Link>}

          {/* <Link to={`/edit-note/${this.props.match.params.id}`}><button type="button" class="btn btn-link text-dark underline">Edit</button></Link> */}
        </div>
      </div>
    )
  }
}