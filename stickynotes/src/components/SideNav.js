import React from 'react';
import { Nav, Button, H1 } from '../style';

const SideNav = (props) => {
	return (
		<Nav>
			<H1>Lambda Notes</H1>

			<Button
				onClick={(event) => {
					event.preventDefault();
					props.toggleMode('default');
					props.history.push('/');
				}}
			>
				View All Notes
			</Button>

			<Button
				onClick={(event) => {
					event.preventDefault();
					props.toggleMode('create');
					props.history.push('/');
				}}
			>
				+ Create New Note
			</Button>
		</Nav>
	);
};

export default SideNav;
