import React, { Component } from 'react';
// import logo from './logo.svg';
import '../src/styles/App.css'
import { Switch, Route } from "react-router-dom";
import { SideNav, ListView, NoteView, Edit, Delete, Create } from './components'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>  */}
        <Switch>
          <Route exact path="/" render={props => <div className="row no-gutters"><SideNav/> <ListView /></div>} />
          <Route path="/note/:id" render={props => <div className="row no-gutters"><SideNav /> <NoteView /></div>}/>
          <Route path="/create" render={props => <div className="row no-gutters"><SideNav /> <Create/></div>}/>
          <Route path="/edit" render={props => <div className="row no-gutters"><SideNav /> <Edit /></div>}/>
          <Route path="/delete" render={props => <div className="row no-gutters"><SideNav /> <Delete/></div>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
