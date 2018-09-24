// Dependencies
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// Styles
import '../styles/App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<SideBar />
				<Route exact path="/" component={ListPage} />
				<Route path={`/note/${id}`} component={NotePage} />
				<Route path="/new" component={NewNotePage} />
				<Route path="/edit" component={EditNotePage} />
			</div>
		);
	}
}

export default App;
