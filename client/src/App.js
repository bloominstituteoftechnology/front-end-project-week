import axios from 'axios';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import CreateNote from './CreateNote';
import EditNote from './EditNote';
import NoteList from './NoteList';
import SingleNoteView from './SingleNoteView';
import Sidebar from './Sidebar';
import './css/index.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    let promise = axios.get("http://localhost:5555/api/notes/faker");

    promise 
        .then(response => {
            console.log(response);
            this.setState({notes: response.data});
        })
        .catch(error => {
            console.log(error);
        })
}

  handleChange(event){
    this.setState({[event.target.name] : event.target.value})
  }

  render() {
    return (
      <div className="App">
        <Sidebar />
        <Switch>
          <Route exact path="/" render={props => (
            <NoteList
              {...props}
              notes={this.state.notes}
            />
          )}/>
          <Route exact path="/notes" render={props => (
            <NoteList
              {...props}
              notes={this.state.notes}
            />
          )}/>
          <Route exact path="/notes/:id" component={SingleNoteView}/>
          <Route exact path="/create" render={props => (
            <CreateNote
              {...props}
              notes={this.state.notes}
              handleChange={this.handleChange}
            />
          )}/>
          <Route path="/notes/:id/edit" component={EditNote}/>
        </Switch>
      </div>
    );
  }
}

export default App;
