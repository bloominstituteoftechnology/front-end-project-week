import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
	return (
		<div>
			<NavLink>edit</NavLink>
			<NavLink>delete</NavLink>
		</div>
	);
};

export default Navbar;
