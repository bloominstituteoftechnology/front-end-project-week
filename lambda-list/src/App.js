import React, { Component } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import NoteList from './components/NoteList';
import { Route } from 'react-router-dom';
import axios from 'axios';
import NewNote from './components/NewNote'

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      note: []
    }
  }

  componentDidMount() {
    console.log('inside component did mount')
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        console.log(response)
        this.setState({
          note: response.data
        })
      })

  }


  render() {
    return (
      <div className="App">
        <Header />
        

        <div className="appBody">
               <Menu />
               <Route exact path="/" render={props => <NoteList notes={this.state.note} />} />
               <Route path="/new-note" component={NewNote} />
        </div> 
        
      </div>//app
    );
  }
}

export default App;
