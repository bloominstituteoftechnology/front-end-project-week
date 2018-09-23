// React
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Components
import ListView from './views/ListView';

// Styles
import './css/App.css';

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
				<header>
					<h1>Lambda Notes</h1>
				</header>
				
				<Route exact path = '/' render = { () => <ListView notes = { this.state.notes } /> } />
			</div>
		);
	}
}

export default App;
