import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import NotesContainer from './components/NotesContainer/NotesContainer';
import SideNav from './components/SideNav/SideNav';
import NewNote from './components/NewNote/NewNote';
import NoteView from './components/NoteView/NoteView';
import EditNote from './components/EditNote/EditNote';
import RegisterLogin from './components/RegisterLogin/RegisterLogin';



class App extends Component {


  render() {
  
    return (
      
      <div className="App">
        <Route exact path ='/' component={RegisterLogin}/>
        <Route path="/notes" component={SideNav} />
        <Route exact path="/notes" component={NotesContainer} />
        <Route path="/notes/create" component={NewNote} />
        <Route exact path="/notes/note/:id" component={NoteView}/>
        {/* <Route path="/notes/note/delete/:id" component={NoteView}/> */}
        <Route path="/notes/note/edit/:id" component={EditNote}/>
      
      </div>
      
    );
  }
}

export default App;
