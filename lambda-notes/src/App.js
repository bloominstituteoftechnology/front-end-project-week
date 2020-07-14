import React, { Component } from 'react';
import ViewNotesContainer from './components/ViewNotes/ViewNotesContainer';
import CreateNoteContainer from './components/CreateNotes/CreateNoteContainer';
import EachNoteBody from './components/EachNote/EachNoteBody';
import EditNoteBody from './components/EditNote/EditNoteBody';
import Login from './components/Login/Login';
import './App.css';
import {Route} from 'react-router-dom';
import styled from 'styled-components';

class App extends Component {
constructor(props){
super(props);
	this.state={
	};
}  
	

	
render() {
    return (
      <div className="App">
	<Route exact  path="/" render={(props) => <ViewNotesContainer {...props} />} />   
      	<Route exact  path="/notes" render={(props) => <ViewNotesContainer {...props} />} />
        <Route exact path="/add" render={(props) => <CreateNoteContainer {...props} />} />	   
	<Route exact path="/note/:id" render={(props) => <EachNoteBody {...props} />} />
	<Route exact path="/editnote/:id" render={(props) => <EditNoteBody {...props} />} />
    
      </div>
    );
  }
}

export default App;
