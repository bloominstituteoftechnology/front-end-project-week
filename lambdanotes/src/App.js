import React, { Component } from 'react';
import {Route} from 'react-router-dom'

import NavigationPanel from './components/NavigationPanel'
import ViewNotes from './components/ViewNotes'
import CreateNote from './components/CreateNote'
import './App.css';

class App extends Component {

  componentDidMount(){
    const appData = this.props.data
    //Load the Notes 
    appData.actions.fetchNotes();
    
  }



  render() {
    //Grab loading and status properties of state
    const loading = this.props.data.state.loading
    const error = this.props.data.state.error



  
    return (
     
      <div className="App">
        {loading ? <h1>Loading...</h1> : null}
        {error !== null ? <h1>{error}</h1> : null}
        <div className="sidePanel">
          <NavigationPanel />
        </div>

        <div className="mainPanel">
          <Route exact path="/" component={ViewNotes} />
          <Route exact path="/create" component={CreateNote} />
          <Route exact path="/note" component={CreateNote} />
          <Route exact path="/edit" component={CreateNote} />
          <Route exact path="/delete" component={CreateNote} />
        </div>
      </div>
    );
  }
}

export default App;
