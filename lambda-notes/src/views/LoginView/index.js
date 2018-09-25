// React
import React from 'react';

// Components
import { Login } from '../../components';

const LoginView = props => {
	return(
		<div className = 'main-content'>
			<Login handleLogin = { props.handleLogin } />
		</div>
	);
}

export default LoginView;
