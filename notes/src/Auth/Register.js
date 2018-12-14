import React from 'react';
import axios from 'axios';
import './register.css';

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
  render() {
    return (
      <form className='form'onSubmit={this.register}>
        <div className='inputs'>
          <h3>Please,<br/> choose Username:</h3>
            <input 
              name="username"
              value={this.state.username}
              type="text"
              onChange={this.handleChange} />
        </div>
        <div className='inputs'>
          <h3>Password:</h3>
          <input 
            name="password"
            value={this.state.password}
            type="password"
            onChange={this.handleChange} />
        </div>
        <div>
          <button className='submit'type="submit">Register</button>
        </div>
      </form>
    );
  }
  register = event => {
    event.preventDefault();
    axios
      .post('http://localhost:5200/api/register', this.state)
      .then(res => {
      localStorage.setItem("jwt", res.data.token);
      this.props.history.push('/notes');
    })
    .catch(err => {
      console.error('Axios Error', err)
    })
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }
}


export default Register;