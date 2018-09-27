// React
import React from 'react';

// Dependencies
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Nav extends React.Component {
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
		const { errorMsg } = this.props;
		const { toggleMenu } = this.state;

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
						<i className = { `fas ${ toggleMenu ? 'fa-times' : 'fa-bars' }` } />
					</div>
				</header>

				{ errorMsg && <p>{ errorMsg }</p> }

				<div className = { `btn-container ${ toggleMenu ? '' : 'display-none' }` }>
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

Nav.propTypes = {
	errorMsg: PropTypes.string,
}
