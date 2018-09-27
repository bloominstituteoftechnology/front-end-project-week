// React
import React from 'react';

// Dependencies
import PropTypes from 'prop-types';

// Assets
import logo from '../../assets/notepad.svg';

const HomeView = props => {
	const { username } = props;

	return(
		<div className = 'main-content'>
			<div className = 'home'>
				<h1>Welcome back to Lambda Notes, { username }!</h1>

				<img className = 'logo' src = { logo } alt = 'notepad' />
			</div>
		</div>
	);
}

HomeView.propTypes = {
	username: PropTypes.string,
}

export default HomeView;
