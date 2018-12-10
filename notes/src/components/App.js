import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../css/index.css';
import NoteList from './NoteList';
import AddNote from './AddNote';
import NotePage from './NotePage';
import Nav from './Nav';
import EditPage from './EditPage';

class App extends Component {
  	render() {
		return (
			<div className="App">
				<Nav />
				<div className='current-page'>
					<Switch>
						<Route path='/add' component={AddNote} />
						<Route exact path='/' component={NoteList} />
						<Route exact path='/:id' render={ (props) => <NotePage {...props}/> } />
						<Route path='/:id/edit' render={ (props) => <EditPage {...props}/> } />
					</Switch>
				</div>
			</div>
		);
  	}
}

export default App;
