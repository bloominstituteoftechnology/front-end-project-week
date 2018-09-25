// React
import React from 'react';

// Assets
import logo from '../assets/notepad.svg';

export default class Login extends React.Component {
	handleSubmit = e => {
		e.preventDefault();

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

					<p>Name:</p>
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
