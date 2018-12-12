import React from "react";
import { Link } from "react-router-dom";

function SideBarButtons() {
	return (
		<div className="navlinks">
			<Link className="navlink view-notes" to="/">
				View Your Notes
			</Link>
			<Link className="navlink add-note" to="/add-note">
				+ Add a new note
			</Link>
		</div>
	);
}

export default SideBarButtons;
