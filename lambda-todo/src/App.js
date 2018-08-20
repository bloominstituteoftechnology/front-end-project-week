import React, { Component } from 'react';
import './App.css';
import Nav from './Home/Nav Links/Nav'; 
import NotesHolder from './Home/HomePage/NotesHolder'
import NewNotePage from './New Note/NewNotePage';
import {Route} from 'react-router-dom'; 


class App extends Component {
  constructor(){
    super(); 
    this.state={ 

    }
  }
  render() {
    return (
      <div className="App">
      <div className="nav-bar">
      <Nav />
      </div>
      <div className="pages">
      <Route exact path="/" 
      render={props => <NotesHolder {...props} notes={this.state.notes} />}
      />
      <Route exact path="/create-new" 
      render={props => <NewNotePage {...props} notes={this.state.notes} />}
      />
      </div>
      </div>
    );
  }
}

export default App;
