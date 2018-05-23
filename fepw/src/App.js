import React, { Component } from 'react';
import './App.css';
import Main from './components/main.js';
import { Route } from 'react-router-dom';
import Sidebar from './components/sidebar.js';


class App extends Component {
	
render() {
    return (
	    <Route path ='/'>
		    <div className='container'>
			    <div className='row'>
			<div className='col-4'><Sidebar /></div>
			<div className='col-8'><Main /></div>
			   </div>
		   </div>
	</Route>
    );
  }
}

export default App;

//22 May Figured this should be where I layout the main components that everything else feeds into - Main and Sidebar. Started trying to style it but it look right yet. Will start working on that next.
