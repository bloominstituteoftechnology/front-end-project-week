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

	handleLogOut = e => {
		e.preventDefault();

		localStorage.removeItem('lambdaNotesUsername');
		window.location.reload();
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

				{ this.props.errorMsg && <p>{ this.props.errorMsg }</p> }

				<div className = { `btn-container ${ this.state.toggleMenu ? '' : 'display-none' }` }>
					<NavLink 
						exact to = '/' 
						className = 'btn' 
						activeClassName = 'active-btn' 
						onClick = { () => this.setState({ toggleMenu: false }) } 
					>Home</NavLink>

					<NavLink 
						to = '/list' 
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

					<a 
						className = 'btn logout-btn' 
						onClick = { e => this.handleLogOut(e) } 
					>Log Out</a>
				</div>
			</div>
		);
	}
}

export default Nav;
