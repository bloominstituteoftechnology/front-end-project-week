// React
import React from 'react';

// Assets
import logo from '../../assets/notepad.svg';

const HomeView = () => {
	return(
		<div className = 'main-content'>
			<div className = 'home'>
				<h1>Welcome to Lambda Notes!</h1>

				<img className = 'logo' src = { logo } alt = 'notepad' />
			</div>
		</div>
	);
}

export default HomeView;
