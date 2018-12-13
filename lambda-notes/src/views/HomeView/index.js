// React
import React from 'react';

// Dependencies
import PropTypes from 'prop-types';

// Components
import { Home } from '../../components';

const HomeView = ({ username }) => {
	return(
		<div className = 'main-content'>
			<Home username = { username } />
		</div>
	);
}

HomeView.propTypes = {
	username: PropTypes.string,
}

export default HomeView;
