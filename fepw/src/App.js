import React, { Component } from 'react';
import './App.css';
import Main from './components/main.js';
import { Route } from 'react-router-dom';
import Sidebar from './components/sidebar.js';

class App extends Component {
	
render() {
    return (
	<Route path ='/'>
		<div className='App container-fluid'>  
	        	<div><Sidebar /></div>
			<div classname='col-9'><Main /></div>
		</div>
	</Route>
    );
  }
}

export default App;
