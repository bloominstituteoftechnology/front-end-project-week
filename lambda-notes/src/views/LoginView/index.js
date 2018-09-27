// React
import React from 'react';

// Dependencies
import PropTypes from 'prop-types';

// Components
import { Login } from '../../components';

const LoginView = props => {
	const { handleLogin } = props;

	return(
		<div className = 'main-content'>
			<Login handleLogin = { handleLogin } />
		</div>
	);
}

LoginView.propTypes = {
	handleLogin: PropTypes.func,
}

export default LoginView;
