import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import axios from 'axios'

import './App.css';
import SideBar from './components/SideBar';
import ListNotes from './components/listView/ListNotes';
import CreateNote from './components/newView/CreateNote';


class App extends Component {

  state = {
    notes: []
  }

  componentDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then( response => {
        console.log(response)
        this.setState({notes: response.data})
      })
      .catch(err => console.log(err))
  }
  
  render() {
    return (
      <div className="App">
      <div>
        <SideBar />
      </div>
      <div>
        <Route exact path='/' render={ props => <ListNotes {...props} notes={this.state.notes}/>} />
        <Route path='/create-note' component={CreateNote} />
      </div>
      
      </div>
    );
  }
}

export default App;
