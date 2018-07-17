import React from 'react';
import '../../App.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleLogin = e => {
    console.log('Login Handled');
    const user = this.state.username;
    localStorage.setItem('user', user);
    window.location.reload();
  }

  render() {
    return (
      <form className="login">
      Username: <input name="username" placeholder="username" onChange={this.handleChange} value={this.state.username} />
      Password: <input name="password" placeholder="password" onChange={this.handleChange} value={this.state.password} /><br/>
      <input type="submit" value="Log In" onClick={this.handleLogin} />
      </form>
    );
  }
}

export default Login;
