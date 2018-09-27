// React
import React from 'react';
import { Route } from 'react-router-dom';

const Auth = App => LoginView => class extends React.Component {
	state = {
		loggedIn: false,
		username: '',
	};

	handleLogin = () => {
		this.setState({ 
			loggedIn: true,
			username: localStorage.getItem('lambdaNotesUsername'),
		});
	}

	render() {
		// If you're logged in, return the App component, if not, return the LoginView component.
		if (this.state.loggedIn) {
			return(
				<Route path = '/' render = { props => <App { ...props } username = { this.state.username } /> } />
			);
		} else {
			return(
				<div className = 'App login-view'>
					<LoginView handleLogin = { this.handleLogin } />
				</div>
			);
		}
	}
}

export default Auth;
