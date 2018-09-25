// React
import React from 'react';

// Assets
import logo from '../assets/notepad.svg';

export default class Login extends React.Component {
	render() {
		return(
			<div className = 'login'>
				<header>
					<h2 className = 'lambda-notes'>Lambda Notes</h2>

					<img className = 'logo' src = { logo } alt = 'notepad' />
				</header>

				<form className = 'form'>
					<h2>Log in</h2>

					<p>Name:</p>
					<input />

					<p>Password:</p>
					<input />
				</form>
			</div>
		);
	}
}
