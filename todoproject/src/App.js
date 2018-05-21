import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import ListView from './listview/listview';
import Sidebar from './sidebar/sidebar';
import ViewNote from './viewnote/viewnote';
import CreateNote from './createnote/createnote';


class App extends Component {


  render() {
    const NoMatch = () => (
      <h3>This page does not exist - Sorry!</h3>
  )

    return (
      <div className="App">
      
      <ListView />
      <Sidebar />

      <Switch>
            <Route exact path="/" component={Sidebar}></Route>
            <Route path="/ViewYourNotes" component={ViewNote}></Route>
            <Route path="/CreateNewNote" component={CreateNote}></Route>
            <Route component={NoMatch}></Route>
      </Switch>
    
      </div>
    );
  }
}

export default App;
