import React, { Component } from 'react';
import './index.css';
import './App.css';
import ListView from './ListView';
import CreateNote from './CreateNote';
import EditNote from './EditNote';
import {Link, Route} from 'react-router-dom';
class App extends Component {
  render() {
    return (
     
      <div>
      <Route path="/ListView" component={ListView}/>
      <Route path="/CreateNote" component={CreateNote}/>

      </div>
      
    );
  }
}

export default App;
 