import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';
import dummyData from './dummyData';
import NoteList from './Components/NoteList';
import CreateForm from './Components/CreateForm';
import SingleNote from './Components/SingleNote';
import EditForm from './Components/EditForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
        notes: []
    };
}

componentDidMount() {
    this.setState({ notes: dummyData })
}

  render() {
    return (
      <div className="App">     
        <div className='nav-container'>
          <h1 className='header'>Lambda<br /> Notes</h1>
          <Link to='/'>
            <button className='nav-btn'>
            View Your Notes
            </button>
          </Link>
          <Link to='create'>
            <button className='nav-btn'>
            +Create New Note
            </button>
          </Link>
        </div>      
        <div className='note-container'>
          <Route exact path='/' render={(props) => <NoteList {...this.state}/>} />
          <Route path='/note/:id' render={(props) => <SingleNote {...this.state} />} />
          {/* <Route path='/create' component={CreateForm} /> */}
          <Route path='/create' render={(props) => <CreateForm {...this.state} />} />
          <Route path='/edit' component={EditForm} />
        </div>            
      </div>
    );
  }
}

export default App;
