import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route } from 'react-router-dom';

import NoteList from './NoteList/NoteList';
import Nav from './nav';

class App extends Component {
  constructor(){
    super();
    this.state={
      notes: []
    }
  }

  componentDidMount(){
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        console.log(response);
        this.setState({ 
          notes: response.data 
        });
      })
      .catch(err => {
        console.log(err);
      });
  }


  render() {
    console.log(this.state.notes)
    console.log(this.state.notes[0])
    return (
      <div className="clearfix App">
        <Nav />
        <div className="view">
        <Route exact path='/' render={props => (
          <NoteList 
            {...props}
            notes={this.state.notes}
          />
        )}
          
        />
        <Route path='/form'
          
        />
          
        </div>
      </div>
    );
  }
}

export default App;
