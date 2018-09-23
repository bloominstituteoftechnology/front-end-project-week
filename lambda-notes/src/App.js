// React
import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

// Components
import ListView from './views/ListView';

class App extends Component {
	state = {
		notes: [
			{
				noteTitle: '',
				noteBody: '',
			}
		],
		toggleMenu: false,
	};

	componentDidMount() {
		const loremIpsumNotes = [];

		for (let i = 0; i < 9; i++) {
			loremIpsumNotes.push({
				noteTitle: 'Note Title',
				noteBody: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis',
			});
		}

		this.setState({
			notes: loremIpsumNotes,
		});
	}

	toggleMenu = () => {
		this.setState({
			...this.state,
			notes: [ ...this.state.notes ],
			toggleMenu: !this.state.toggleMenu,
		});
	}

	render() {
		return (
			<div className = 'App'>
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

					<div className = { `btn-container ${ this.state.toggleMenu ? null : 'display-none' }` }>
						<NavLink 
							exact to = '/' 
							className = 'btn' 
							activeClassName = 'active-btn'
						>View Your Notes</NavLink>

						<NavLink 
							to = '/create-new' 
							className = 'btn' 
							activeClassName = 'active-btn'
						>+ Create New Note</NavLink>
					</div>
				</div>
				
				<Route 
					exact path = '/'  
					render = { () => <ListView notes = { this.state.notes } /> } 
				/>
			</div>
		);
	}
}

export default App;
