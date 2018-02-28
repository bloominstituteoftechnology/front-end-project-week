import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import NoteList from './components/NoteList';
import CreateForm from './components/CreateForm';
import Note from './components/Note'


class App extends Component {
  
  render() {


    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Note App</h1>
              <div>
                <NavLink to="/" activeClassName="navlink--active" exact>
                  View Notes
                </NavLink> 
              </div>
              <div>
                <NavLink to="/create_note" activeClassName="navlink--active" exact>
                  Create New Note
                </NavLink>
              </div>
          </header>

          <Route path='/' component={NoteList} exact />
          <Route path='/create_note' component={CreateForm} />
          <Route path='/details/:id' component={Note} />
          {/* <Route path='/edit/:id' component={Details} /> */}
          
          
          

          
        </div>
    );
  }
}

export default App;
