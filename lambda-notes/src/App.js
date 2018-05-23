import React, { Component } from 'react';
import { Route } from 'react-router-dom';


import './App.css';
import ListView from './components/ListView.js';
import NewNote from './components/NewNote.js';

class App extends Component {
  render() {
    return (
      <div className="App">      
          {/* <ListView />                                      */}
          <Route exact path="/" component={ListView}></Route>
          <Route path="/newnote" component={NewNote}></Route>
      </div>
    );
  }
}

export default App;

// const App = () => (
//   <div>
//     <Navigation />    
//     <Route exact path= "/" component={Home}></Route>
//     <Route path= "/about" component={About}></Route>
//     <Route path="/contact" component={Contact}></Route>
//   </div>
// );