import React from 'react';
import { LoginDiv, Norris } from './Css.js';
import axios from 'axios';

import styled from 'styled-components';

class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			name: '',
			login: '',
			joke: [],
		};
	}

  componentDidMount() {
    axios
    .get("http://api.icndb.com/jokes/random")
    .then(response => {
    	let joke = response.data.value.joke.replace(/&quot;/g, '');
      this.setState({joke: joke});
    })
    .catch(err => {
      console.log(err)
    })
  }

	loginHandler = event => {
		this.setState({[event.target.name]: event.target.value})
	}

	login = event => {
		localStorage.setItem(this.state.name, this.state.login)
	}

	render(){
		return (
		<LoginDiv>
			<form>
				<input placeholder="user name" value={this.state.name} onChange={this.loginHandler} name="name" />
				<input placeholder="password" value={this.state.login} onChange={this.loginHandler} name="login"/>
				<button onClick={this.login}>Login</button>
			</form>
			<Norris>{this.state.joke}</Norris>
		</LoginDiv>
		)
	}
}

export default Login;
