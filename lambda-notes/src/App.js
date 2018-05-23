import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './Notes.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import DeleteModal from './components/DeleteModal';
import EditNote from './components/EditNote';
import NewNotes from './components/NewNotes';
import Notes from './components/Notes';
import NoteView from './components/NoteView';

class App extends Component {

  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
     
    <Router>
      <div className="Notes-sidebar" style="width:25%">
        <h3 className="Notes-bar-item">Lambda Notes</h3>
        <ul>
        <li><Link to="/notes" className="Notes-bar-item notes-button">View Your Notes</Link></li>
        <li><Link to="/newnotes" className="Notes-bar-item notes-button">'+' Create New Note</Link></li>
        </ul>  
          <hr/>

           {/* <Route exact path="/" component={Home} />  */}
          <Route path="/viewyournotes" component={Notes} />
          <Route path="/+ createyournotes" component={NewNotes} />  
          <Route path="/edit" component={EditNote} />
          <Route path="/delete" component={DeleteModal} />

          
        </div>
        {/* </div> */}
      </Router>
    //   <div>
    //     <Notes />
    //     <NewNotes />
    //     <NoteView />
    //     <EditNote />
    //     <DeleteModal />
    // </div>  

    );
  }
}

export default App;
