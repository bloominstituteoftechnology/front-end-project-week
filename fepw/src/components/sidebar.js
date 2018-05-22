import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
	render() {
		return(
			<nav>
				<h2>Lambda<br />Notes</h2>
				<Link to='/'>
					<button>View Your Notes</button>
				</Link>

				<Link to='/CreateNote'>
					<button>+ Create New Note</button>
				</Link>
			</nav>
		)
	}
}

export default Sidebar;
