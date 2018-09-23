// React
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Components
import ListView from './views/ListView';

// Styles
import './css/App.css';

class App extends Component {
	render() {
		return (
			<div className = 'App'>
				<header>
					<h1>Lambda Notes</h1>
				</header>
				
				<Route exact path = '/' component = { ListView } />
			</div>
		);
	}
}

export default App;
