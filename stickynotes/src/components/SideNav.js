import React from 'react';
import { Nav, Button } from '../style';
import { NavLink } from 'react-router-dom';

const SideNav = (props) => {
	return (
		<Nav>
			<NavLink exact to="/">
				<Button>View All Notes</Button>
			</NavLink>
			<NavLink to="/create">
				<Button>+ Create New Note</Button>
			</NavLink>
		</Nav>
	);
};

export default SideNav;
