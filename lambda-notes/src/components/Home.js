// React
import React from 'react';

// Dependencies
import PropTypes from 'prop-types';

// Assets
import logo from '../assets/notepad.svg';

const Home = ({ username }) => {
	return(
		<div className = 'home'>
			<h1>Welcome back to Lambda Notes, { username }!</h1>

			<img className = 'logo' src = { logo } alt = 'notepad' />
		</div>
	);
};

Home.propTypes = {
	username: PropTypes.string,
};

export default Home;
