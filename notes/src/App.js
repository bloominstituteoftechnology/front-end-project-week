import React, { Component } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import {Route, Link} from 'react-router-dom';
import {notes} from './components/Notes';
import ListView from './components/ListView';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: notes,
    }
  }
  render() {
    return (
      <div>
        <div className='App'>
          <Route path='/' component={SideBar} />
          <Link to="/"></Link>
          <ListView notes={this.state.notes} />
        </div>

      </div>
    );
  }
}

export default App;
