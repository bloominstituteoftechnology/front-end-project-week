import React, { Component } from 'react';
import {Route} from 'react-router-dom'

import NavigationPanel from './components/NavigationPanel'
import ViewNotes from './components/ViewNotes'
import CreateNote from './components/CreateNote'
import Note from './components/Note'
import Edit from './components/Edit'
// import Delete from './components/Delete'
import './App.css';

class App extends Component {

  componentDidMount(){
    const appData = this.props.data
    //Load the Notes 
    appData.actions.fetchNotes();
    
  }



  render() {


  
    return (
     
      <div className="App">
        <div className="navPanel">
          <NavigationPanel />
        </div>

        <div className="mainPanel">
          <Route exact path="/api/notes" component={ViewNotes} />
          <Route exact path="/create" component={CreateNote} />
          <Route exact path="/note/:id" component={Note} />
          <Route exact path="/edit/:id" component={Edit} />
        </div>
      </div>
    );
  }
}

export default App;
