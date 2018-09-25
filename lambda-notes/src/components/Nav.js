// React
import React from 'react';

// Dependencies
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
	state = {
		toggleMenu: false,
	};

	toggleMenu = () => {
		this.setState({ toggleMenu: !this.state.toggleMenu });
	}

	render() {
		return(
			<div className = 'nav slide-down-anim'>
				<header>
					<div className = 'lambda-notes'>
						Lambda<br className = 'desktop' />
						Notes
					</div>

					<div 
						className = 'hamburger-menu-container phone' 
						onClick = { this.toggleMenu }
					>
						<i className = { `fas ${ this.state.toggleMenu ? 'fa-times' : 'fa-bars' }` } />
					</div>
				</header>

				<p>{ this.props.errorMsg }</p>

				<div className = { `btn-container ${ this.state.toggleMenu ? '' : 'display-none' }` }>
					<NavLink 
						exact to = '/' 
						className = 'btn' 
						activeClassName = 'active-btn' 
						onClick = { () => this.setState({ toggleMenu: false }) } 
					>View Your Notes</NavLink>

					<NavLink 
						to = '/create-new' 
						className = 'btn' 
						activeClassName = 'active-btn' 
						onClick = { () => this.setState({ toggleMenu: false }) } 
					>+ Create New Note</NavLink>
				</div>
			</div>
		);
	}
}

export default Nav;
