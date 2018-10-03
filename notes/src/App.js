import React, {Component} from 'react';
import {Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import {NotesList, CreateNote, Note, Navigation} from './Components'


class App extends Component {
  constructor() {
    super();
    this.state = {
        notes: []
    }
  }

  componentDidMount() {
    axios.get(`https://killer-notes.herokuapp.com/note/get/all`)
    .then(response => {
        this.setState({notes: response.data});
    })
    .catch(err => {
        console.log("error", err);
    });
  }

  render(){
    return(
      <div className="App">
        <Navigation />
        <Switch>
          <Route 
            exact
            path='/' 
            render={props => (
            <NotesList {...props} 
            notes = {this.state.notes}
          />
            )}
          />

          <Route 
            exact
            path='/create' 
            render={CreateNote}
          />

          <Route 
            exact
            path='/:id'
            component={Note}
          />
        </Switch>
      </div>
    )
  }
}
     


export default App;
