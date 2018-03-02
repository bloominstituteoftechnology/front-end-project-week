import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';

class App extends Component {
  render() {
    return (
      <Router>
				<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <Nav />
					<Route path="/" component={ViewNotes} exact />;
					<Route path="/viewnotes" component={this.ViewNotes} exact />
					<Route path="/createnote" component={CreateNote} exact />
					<Route path="/viewsinglenote/:id"
					     render={props => {
							    return <ViewSingleNote id={props.match.params.id} />}
							 }
				/>
      </div>
			</Router>
    );
  }
}

export default App;
