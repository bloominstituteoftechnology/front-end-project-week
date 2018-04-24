import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import {Route} from 'react-router-dom';
import NotesList from './components/NotesList';
import NewNote from './components/NewNote';
import DeleteNote from './components/DeleteNote';
import EditNote from './components/EditNote';
import Notes from './components/Data';
import SelectedNotes from './components/SelectedNotes'; 

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
        <Route path="/newNote" component={NewNote}/>
        <Route path="/editNote/:id" component={EditNote}/>
        <Route path="/deleteNote/:id" component={DeleteNote}/>
        <Route path="/selectedNotes/:id" component={SelectedNotes}/>
        



          
        
        
      </div>  
    
    );
  }
}

export default App;
