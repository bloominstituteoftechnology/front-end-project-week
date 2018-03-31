import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
import CreateNote from './createNote';
import ViewNotes from './ViewNotes';
//import ViewSingleNote from './ViewSingleNote';

class App extends Component {
  render() {
    return (
				<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
			  <Router>
					<div>
				<Nav />
           <Route path="/" component={ViewNotes} exact />; 
            <Route path="/createnote" component={CreateNote} exact />
           </div>
					</Router>
					</div>	
    );
  }
}

export default App;
