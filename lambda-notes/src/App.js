// Dependencies
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// CSS
/*import logo from './logo.svg';*/
import './App.css';
// Components
import Navbar from './components/Navbar';
import NoteList from './components/NoteList';
import ViewNote from './components/Forms/ViewNote';
import InputForm from './components/Forms/InputForm';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="row">
          <Navbar classes="col-md-3" />
          <div className="main-view col-md-9">
            <Switch>
              <Route exact path="/" component={NoteList} />
              <Route path="/note/:id" render={props => <ViewNote id={props.match.params.id} />} />
              <Route path="/new" render={props => <InputForm match={props.match} />} />
              <Route path="/edit/:id" render={props => <InputForm match={props.match} />} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

/* Code I might want to keep around
  <img src={logo} className="App-logo" alt="logo" />
*/