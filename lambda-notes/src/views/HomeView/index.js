// React
import React from 'react';

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

export default HomeView;
