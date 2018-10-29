// React
import React from 'react';

// Dependencies
import PropTypes from 'prop-types';

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

	componentDidMount() {
		// If you login with the URL pointing where a component should have data from
		// the API before the GET request is even made, you will get an error.
		// The following if statement forces you to be at the home screen when you log in
		// so the GET request can have a chance to be made.
		if (window.location.href !== 'http://localhost:3000/') window.location.href = 'http://localhost:3000/';
	}

	render() {
		const { errorMsg } = this.state;

		return(
			<div className = 'login'>
				<header>
					<h2 className = 'lambda-notes'>Lambda Notes</h2>

					<img className = 'logo' src = { logo } alt = 'notepad' />
				</header>

				<form className = 'form' onSubmit = { e => this.handleSubmit(e) }>
					<h2>Log in</h2>

					{ errorMsg && <p className = 'error-msg'>{ errorMsg }</p> }

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

Login.propTypes = {
	handleLogin: PropTypes.func,
}
