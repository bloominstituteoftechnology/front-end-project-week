import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import {Route} from 'react-router-dom';
import NotesList from './components/NotesList';
import NewNote from './components/NewNote';
import DeleteNote from './components/DeleteNote';
import Notes from './components/Data';

class App extends Component {

  state = {
    Notes: [],
  }

  componentDidMount(){
    this.setState({Notes})
  }


  render() {
    return (
      <div className="App">
        <Route exact path="/" component={NotesList}/>
        <Route path="/NewNote" component={NewNote}/>
      </div>  
    
    );
  }
}

export default App;
