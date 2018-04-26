import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NotesList from "./notesList"
import AddNewNote from './addNewNote';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Link } from 'react-router-dom';
import { addNoteActionCreator } from "./allActions";
import { connect } from 'react-redux';
import NoteView from "./notView";
import EditNote from "./editNote";


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className="LambdaNotes">
            <div className="LambdaNotes_p">
              <span>Lambda</span><span> Notes</span>
              
               </div>
               <p className="Buttons">
            <Link to="/" className="ButtonLink">
              <button>View Your Notes</button>
            </Link>
            <Link to="/NewNote">
              <button> + Create New Note</button>
            </Link>
            </p>
          </div>         
            <Route path="/" exact component={NotesList} />                   
            <Route path="/NewNote" exact component={AddNewNote} />         
            <Route path="/EditCurrentNote/:index" exact component={EditNote} />         
            <Route path="/:noteName" exact render={(RouterProps) => {
              return (<NoteView {...RouterProps} />)
            }} />                 
        </div>
      </Router>
    );
  }
}
const mapStateToProps = (state) => {
  return {
  }
}
export default connect(mapStateToProps, addNoteActionCreator)(App);

