import React from "react";
import { Nav, NavItem, NavLink, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
	return (
		<div className="bg-secondary">
			<Nav vertical>
				<h1>Lambda Notes</h1>
				<NavItem>
					<NavLink>
						<Link to="/notesList">
							<Button color="primary"> View Notes </Button>
						</Link>
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink>
						<Link to="/noteForm">
							<Button color="primary">Create Note</Button>
						</Link>
					</NavLink>
				</NavItem>
			</Nav>
		</div>
	);
};
export default Navigation;
