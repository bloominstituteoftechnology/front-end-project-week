// React
import React from 'react';
import { Route } from 'react-router-dom';

const Auth = App => LoginView => class extends React.Component {
	state = {
		loggedIn: true,
	};

	render() {
		if (this.state.loggedIn) {
			return(
				<Route path = '/' component = { App } />
			);
		} else {
			return(
				<div className = 'App login-view'>
					<LoginView />
				</div>
			);
		}
	}
}

export default Auth;
