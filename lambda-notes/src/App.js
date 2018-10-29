import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import axios from 'axios'
import './App.css';
import Navigation from './Components/Navigation/Navigation'
// import List from './Components/Views/ListView/List'
import CreateNew from './Components/Views/CreateNew'
import Note from './Components/Views/Note'
import Delete from './Components/Views/Delete'
import Edit from './Components/Views/Edit'
import Notes from './Components/Views/ListView/Notes'

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
      .get('https://killer-notes.herokuapp.com/note/get/all')
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
            <Notes 
              {...props}
              notes={this.state.notes}
            />
          )}
        />




        <Route path='/createNew' component={CreateNew}/>
        <Route path='/note/:id' component={Note}/>
        <Route path='/delete' component={Delete}/>
        <Route path='/edit' component={Edit}/>
      </div>
    )
  }
}

export default App