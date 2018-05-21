import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import dummyData from './dummyData';
//import NoteDisplay from "./components/NoteDisplay";
//import LeftColumnPanel from "./components/LeftColumnPanel";
//import newNote from "./components/newNote";
//import axios from 'axios';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ViewNotes from './ViewNotes';
import Nav from './NavBar';
import CreateNote from './CreateNote';
import ViewSingleNote from './ViewSingleNote';
import EditNote from './EditNote';
//import Router from './Router'; 

class App extends Component {
	render() {
		return (
			<Router>
			<div className='App'>
      <Nav />
			<Route path="/" component={ViewNotes} exact />
		  <Route path="/viewnotes" component={ViewNotes} exact />
      <Route path="/createnote" component={CreateNote} exact />
			<Route path="/editnote/:id" component={EditNote} exact />
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
