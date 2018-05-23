import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import notesList from './notes-list.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import ListView from './components/ListView/ListView.js';
import CreateNote from './components/CreateNote/CreateNote.js';
import ViewNote from './components/ViewNote/ViewNote.js';
import EditNote from './components/EditNote/EditNote.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notesList: [],
      currentID: 0
    }
  }

  componentDidMount() {
    this.setState({notesList: notesList});
  }

  setCurrentID = (dataFromChild) => {
    this.setState({currentID: dataFromChild});
  }

  render() {
    return (
      <div className='App'>
        <div className='sidebarContainer'>
          <Route path='/' component={Sidebar} />
        </div>
        <div className='viewContainer'>
          <Route exact path='/' render={ (props) => { return(<ListView {...props} notesList={this.state.notesList} setCurrentID={this.setCurrentID}/>)}} />
          <Route path='/create' component={CreateNote} />
          <Route exact path='/:id' render={ (props) => { return(<ViewNote {...props} notesList={this.state.notesList} currentID={this.state.currentID} />)}} />
          <Route path='/note/edit' component={EditNote} />
        </div>
      </div>
    );
  }
}

export default App;
