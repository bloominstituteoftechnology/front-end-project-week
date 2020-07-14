import React, {Component} from 'react';
import {Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import {NotesList, CreateNote, Note, Navigation, EditNote} from './Components'


class App extends Component {
  constructor() {
    super();
    this.state = {
        notes: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:8000/api/notes/`)
    .then(res => {
        this.setState({notes: res.data});
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
            component={CreateNote}
          />

          <Route 
            exact
            path='/edit/:id' 
            render={props => (
              <EditNote {...props}
              notes = {this.state.notes}
              />
            )}
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
