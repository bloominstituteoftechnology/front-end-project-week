import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Notes from './components/notes.js';
import NewNote from './components/newnote.js';
import Note from './components/note.js';
import Expand from './components/expand.js';
import Edit from './components/edit.js';
import Delete from './components/delete.js';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
} from "react-router-dom";

class App extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    notes: []
	};
    }

    componentDidMount() {
	axios
	    .get('http://localhost:3333/notes/')
	    .then(response => {
		const notes = response.data;
		this.setState({notes});
	    })
	    .catch(err => console.log(err));
    }
    
    render() {
	return (
	    <div className="App">
	      <nav className="navbar">
                <h1 className=''>Lambda Notes</h1>
                <br/>
                <div className="buttons">
                  <NavLink to="/">View Your Notes</NavLink>
                  <br/>
		  <NavLink to="/new">+ Create New Note</NavLink>
                  <br/>
		</div>
	      </nav>
	      <Route exact path='/' render={ (props) => <Notes {...props} notes={this.state.notes} /> } />
		<Route path='/new' component={NewNote} />
                <Route exact path='/notes/:id' component={Expand} />
		<Route path='/notes/:id/edit' render={ (props) => <Edit {...props} notes={this.state.notes} /> } />
		<Route path='/notes/:id/delete' render={ (props) => <Delete {...props} notes={this.state.notes} /> } />
	    </div>
	);
    }
}

export default App;
