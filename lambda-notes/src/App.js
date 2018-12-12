import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import axios from 'axios'
import './App.css';
import Navigation from './Components/Navigation/Navigation'
import List from './Components/Views/ListView/List'
import CreateNew from './Components/Views/CreateNewView/CreateNew'
import Note from './Components/Views/NoteView/Note'
import Edit from './Components/Views/EditView/Edit'

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
      .get('http://localhost:3000/api/notes/all')
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
          path='/createnew'
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

        <Route
          path='/edit/:id'
          render={props => (
            <Edit 
              {...props}
            />
          )}
        />

      </div>
    )
  }
}

export default App