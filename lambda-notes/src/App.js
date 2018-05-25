import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import './Notes.css';

import DeleteModal from './components/DeleteModal';
import EditNote from './components/EditNote';
import NewNotes from './components/NewNotes';
import Notes from './components/Notes';
import NoteView from './components/NoteView';

// import { Link } from 'react-router-native';

class App extends Component {
  constructor(props) { 
    super();
    this.state = {


    };
  }
  render() {
    return (
      <div className="container">

      
       <div className="Notes-sidebar">
          <div className="SideBarTitle" >
            <h1 className="Notes-bar-item1" > Lambda </h1>
            <h1 className="Notes-bar-item2" > Notes </h1>

            <a href="/" >
              <button type="button" className="Notes-button-one">
                View Your Notes
            </button>
            </a>
            <a href="/newnotes" >
              <button type="button" className="Notes-button-two">
                + Create New Note
            </button>
            </a>
          </div>
        </div>
        <div className="NewNote">
          <h2>Create New Note:</h2>
          <div className= "NoteTitle">
            <form action="/action_page.php">
              <label for="ntitle"></label>
              <input type="text" id="ntitle" name="notetitle" placeholder="Note Title"/>
             </form>       
          </div>  
          <form>
            <textarea> Note Content </textarea>
          </form>  
        
        </div>
          
        </div>
      

    );
  }
}

export default App;