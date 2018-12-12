import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => (
	<div className="Sidebar">
		<div className="Sidebar__header">
			<Link to="/">
				<h1>Lambda</h1>
				<h1> Notes</h1>
			</Link>
		</div>
		<Link to="/notes">
			<button className="Button">View Your Notes</button>
		</Link>

		<Link to="/add">
			<button className="Button">+ Create New Note</button>
		</Link>
	</div>
);

export default Sidebar;
