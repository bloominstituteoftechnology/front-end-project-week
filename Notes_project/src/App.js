import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';

import  NoteCard  from './components/NoteCard';
import Sidebar from './components/Sidebar';
import NoteContainer from './components/NoteContainer';
import dummyData from './dummydata';
import NoteView from './components/NoteView';
import EditCard from './components/EditCard';
import CreateCard from './components/CreateCard';


class App extends Component {
  



  render() {
    return (
      <div className="Container">
        <div className="App">
          <Route path= '/' component={Sidebar}></Route>
          <Route path='/NoteContainer' component={NoteContainer}></Route>
          <Route path='/CreateCard' component={CreateCard} ></Route>
          <Route path='/EditCard' component={EditCard} ></Route>
          <Route path='/NoteView' component={NoteView} ></Route>
          {/* <Sidebar/>
          <NoteContainer/> */}
          
        </div>
      </div>
    );
  }
}

export default App;
