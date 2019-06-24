import React, { Component } from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Note from './components/notes/Note';

import NavBar from './components/app/NavBar' ;
import './App.css';
//import Content from './components/app/Content' ;
import NotesList from './components/notes/NotesList';
//import Title from './components/app/Title';
import Create from './components/edit/Create';

class App extends Component {
  constructor(props) {
    super(props) ;
    this.state = { }
}  
  render() {
    return (
      <div className="App">
        <div className="container">
          <nav className="nav">
          
            <NavBar />

          </nav>
          <div className="page">
            {/* <div className="page-title">
               <Title /> 
            </div> */}
            {/* <div className="page-content"> */}
                <Route exact path="/" component={NotesList} />
                <Route path="/create" component={Create} />
                <Route path="/note/:_id" component={Note}/>
            {/* </div> */}
          </div>
        </div>        
      </div>
    );
  }
}
export default App;