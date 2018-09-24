// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Styles
import '../styles/SideBar.css';

class SideBar extends Component {
	render() {
		return (
			<nav className="SideBar">
				<h1 className="side-bar-title">Lambda Notes</h1>
				<Link to="/" className="note-list-link">
					View Your Notes
				</Link>
				<Link to="/new" className="new-note-link">
					+ Create New Note
				</Link>
			</nav>
		);
	}
}

export default SideBar;
