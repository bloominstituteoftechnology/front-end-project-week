import React, { Component } from 'react';
import './App.css';
import Main from './components/main.js';
import { Route } from 'react-router-dom';
import Sidebar from './components/sidebar.js';


class App extends Component {
	
render() {
    return (
	    <Route path ='/'>
		    <div>
			  <div><Sidebar /></div>
			  <div><Main /></div>
		</div>
	    </Route>
    );
  }
}

export default App;

//22 May Figured this should be where I layout the main components that everything else feeds into - Main and Sidebar. Started trying to style it but it look right yet. Will start working on that next.
//28 June I never touched this file again after creating it, and was able to successfully connect my back-end server to my react app while leaving this as-is. That said, knowing what I know now, I would probably have approached this project very differently and this file would be a lot bigger. I didn't really understand react as well at the time and was just trying to get everything to work, so my state is all over the place in various components rather than being in one place. Sorry about that. But at least you can see here that all the good stuff happens in my components file, especially in the main.js component.
