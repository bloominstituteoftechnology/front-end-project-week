// React
import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

// Components
import ListView from './views/ListView';

class App extends Component {
	state = {
		notes: [
			{
				noteTitle: 'Note Title',
				noteBody: 'noteBody1',
			},
			{
				noteTitle: 'Note Title',
				noteBody: 'noteBody2',
			},
			{
				noteTitle: 'Note Title',
				noteBody: 'noteBody3',
			},
			{
				noteTitle: 'Note Title',
				noteBody: 'noteBody4',
			},
			{
				noteTitle: 'Note Title',
				noteBody: 'noteBody5',
			},
			{
				noteTitle: 'Note Title',
				noteBody: 'noteBody6',
			},
			{
				noteTitle: 'Note Title',
				noteBody: 'noteBody7',
			},
			{
				noteTitle: 'Note Title',
				noteBody: 'noteBody8',
			},
			{
				noteTitle: 'Note Title',
				noteBody: 'noteBody9',
			},
		],
	};

	render() {
		return (
			<div className = 'App'>
				<div className = 'side-nav'>
					<header>
						<div>Lambda</div>
						<div>Notes</div>
					</header>

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
