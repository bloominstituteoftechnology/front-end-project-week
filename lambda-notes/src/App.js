import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import axios from 'axios'
import './App.css';
import Navigation from './Components/Navigation/Navigation'
import List from './Components/Views/ListView/List'
import CreateNew from './Components/Views/CreateNewView/CreateNew'
import Note from './Components/Views/NoteView/Note'
import Edit from './Components/Views/Edit'

class App extends Component {
  constructor() {
    super()
    this.state = {
      notes: [],
      title: '',
      body: ''
    }
  }

  componentDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => this.setState({ notes: response.data }))
      .catch(error => console.log(error))
  }



  render() {
    return (
      <div className="App">
        <Navigation />
        <Route 
          exact path='/' 
          render={props => (
            <List 
              {...props}
              notes={this.state.notes}
            />
          )}
        />



        <Route 
          path='/createNew'
          render={props => (
            <CreateNew 
              {...props}
            />
          )}
        />

        <Route
          path='/note/:id'
          render={props => (
            <Note 
              {...props}
            />
          )}
        />


        <Route path='/edit' component={Edit}/>

      </div>
    )
  }
}

export default App