import React from 'react';
import LoginDiv from './Css.js';


class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			name: '',
			login: '',
		};
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
		</LoginDiv>
		)
	}
}

export default Login;
