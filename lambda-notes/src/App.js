// React
import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

// Components
import ListView from './views/ListView';

class App extends Component {
	state = {
		notes: [
			{
				noteTitle: 'noteTitle1',
				noteBody: 'noteBody1',
			},
			{
				noteTitle: 'noteTitle2',
				noteBody: 'noteBody2',
			},
			{
				noteTitle: 'noteTitle3',
				noteBody: 'noteBody3',
			},
		],
	};

	render() {
		return (
			<div className = 'App'>
				<div className = 'side-nav'>
					<h1>Lambda Notes</h1>

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
				
				<Route 
					exact path = '/'  
					render = { () => <ListView notes = { this.state.notes } /> } 
				/>
			</div>
		);
	}
}

export default App;
