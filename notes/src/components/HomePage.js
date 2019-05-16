import '../css/homePage.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Card } from '@blueprintjs/core';

const HomePage = () => {
	return (
		<div>
			<Card className="sideBar" style={{ backgroundColor: `#F16F72` }}>
				<NavLink className="lambdaTitle" to="/">
					<h1 className="lambdaTitle">
						It's
						<br />
						Your <br /> Write
					</h1>
				</NavLink>

				<NavLink className="sideBarButtons" to="/createnote">
					<Button>+ Create New Note</Button>
				</NavLink>
				<NavLink className="sideBarButtons" to="/search">
					<Button>Search for a Note</Button>
				</NavLink>
			</Card>
		</div>
	);
};

export default HomePage;
