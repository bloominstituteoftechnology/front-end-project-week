import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class Sidebar extends Component {
	render() {
		return(
			<nav className="sidebar">
				<div className="lambdanotes">
					<h3>Lambda<br />Notes</h3>
				</div>
				<div className='buttonnav'>
					<Link to='/'>
						<button>View Your Notes</button>
					</Link>
				</div>
				<br />
				<div className='buttonnav'>
					<Link to='/CreateNote'>
						<button>+ Create New Note</button>
					</Link>
				</div>
			</nav>
		)
	}
}

export default Sidebar;

//22May created this today but it's looking pretty ugly so there will be some styling later
