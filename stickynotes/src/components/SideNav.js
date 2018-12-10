import React from 'react';
import { Nav, Button, H1 } from '../style';
import { NavLink } from 'react-router-dom';

const SideNav = (props) => {
	return (
		<Nav>
			<H1>Lambda Notes</H1>
			<NavLink exact to="/" style={{cursor: 'default'}}>
				<Button>View All Notes</Button>
			</NavLink>
			<NavLink to="/create" style={{cursor: 'default'}}>
				<Button>+ Create New Note</Button>
			</NavLink>
		</Nav>
	);
};

export default SideNav;
