import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NoteList from './NoteList';
import AddNote from './AddNote';
import NotePage from './NotePage';
import SideNav from './SideNav';
import EditPage from './EditPage';

class App extends Component {
  	render() {
		return (
			<div className="App">
				<SideNav />
				<Route path='/add' component={AddNote} />
				<Route exact path='/' component={NoteList} />
				<Route path='/:id' render={ (props) => <NotePage {...props}/> } />
				<Route path='/:id/edit' render={ (props) => <EditPage {...props} />} />
			</div>
		);
  	}
}

export default App;
