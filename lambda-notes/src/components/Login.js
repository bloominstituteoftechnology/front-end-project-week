// React
import React from 'react';

// Assets
import logo from '../assets/notepad.svg';

export default class Login extends React.Component {
	state = {
		errorMsg: '',
	};

	handleSubmit = e => {
		e.preventDefault();

		if (!e.target[0].value.match(/[^\s]/g)) {
			return this.setState({
				errorMsg: 'Username cannot be empty.',
			});
		}

		localStorage.setItem('lambdaNotesUsername', e.target[0].value);
		this.props.handleLogin();
	}

	render() {
		return(
			<div className = 'login'>
				<header>
					<h2 className = 'lambda-notes'>Lambda Notes</h2>

					<img className = 'logo' src = { logo } alt = 'notepad' />
				</header>

				<form className = 'form' onSubmit = { e => this.handleSubmit(e) }>
					<h2>Log in</h2>

					{ this.state.errorMsg && <p className = 'error-msg'>{ this.state.errorMsg }</p> }

					<p>Username:</p>
					<input 
						type = 'text' 
					/>

					<p>Password:</p>
					<input 
						type = 'password' 
					/>

					<button className = 'btn save-btn' type = 'submit'>Log In</button>
				</form>
			</div>
		);
	}
}
