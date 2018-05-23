import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

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
        <li><Link to="/newnote" className="Notes-bar-item notes-button">'+' Create New Note</Link></li>
        </ul>  
          <hr/>

          <Route exact path="/" component={Home} /> 
          <Route path="/notes" component={Notes} />
          <Route path="/newnote" component={NewNotes} />  
          
        </div>
        {/* </div> */}
    </Router>

    );
  }
}

export default App;
