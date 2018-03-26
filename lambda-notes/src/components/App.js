import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import NoteCard from '../components/NoteCard';
import CreateNoteForm from '../components/CreateNoteForm'
import Button from '../components/Button';
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="container-fluid">
      <div className="row  App">
        <div className="col-md-3 col-sm-12 indexCol">
          <div className="mainTitle"> <h1> Lambda Notes </h1> </div>
          <div> <Button name={'View Your Notes'}/> </div>
          <div> <Button name={'+Create New Notes'}/> </div>
        </div>
       
        <div className="col-md-9 col-sm-12 noteCardCol">
        <div className="listTitle"> <h4> Your Notes: </h4> </div>
         
            
            <CreateNoteForm />
              

          
        </div>
      </div> 
    </div> // end of container 
    );
  }
}

export default App;
