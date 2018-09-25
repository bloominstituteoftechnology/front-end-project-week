import React, { Component } from 'react';
import ViewNotesContainer from './components/ViewNotes/ViewNotesContainer';
import CreateNoteContainer from './components/CreateNotes/CreateNoteContainer';
import EachNoteBody from './components/EachNote/EachNoteBody';
import EditNoteBody from './components/EditNote/EditNoteBody';
import './App.css';
import {Route} from 'react-router-dom';

class App extends Component {
constructor(props){
super(props);
	this.state={
	};
}  
	

	
render() {
    return (
      <div className="App">
      	<Route exact  path="/" component={ViewNotesContainer} />
        <Route exact path="/add" render={(props) => <CreateNoteContainer {...props} />} />	   
	<Route exact path="/note/:id" render={(props) => <EachNoteBody {...props} />} />
	<Route exact path="/editnote/:id" render={(props) => <EditNoteBody {...props} />} />
    
      </div>
    );
  }
}

export default App;
