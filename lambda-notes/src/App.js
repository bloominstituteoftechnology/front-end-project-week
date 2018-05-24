import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import './Notes.css';

import DeleteModal from './components/DeleteModal';
import EditNote from './components/EditNote';
import NewNotes from './components/NewNotes';
import Notes from './components/Notes';
import NoteView from './components/NoteView';

import { Link } from 'react-router-dom';

class App extends Component {
  constructor(props) { 
    super();
    this.state = {


    };
  }
  render() {
    return (
      <div className="container">
{/*       
      <div>
        <h2>Sticky Notes App</h2>
      </div>  */}
      
       <div className="Notes-sidebar">
          <div className="SideBarTitle" >
            <h1 className="Notes-bar-item1" > Lambda </h1>
            <h1 className="Notes-bar-item2" > Notes </h1>
          </div>
        </div>
        <Link to="/" >
          <button type="button" className="Notesbutton1">
            View Your Notes
            </button>
        </Link >
        <Link to="/newnotes" >
          <button type="button" className="Notesbutton2">
            + Create New Note
            </button>
        </Link >
        </div>
      

    );
  }
}

export default App;