import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { data } from './NoteData';
// import Sidebar from './components/Sidebar';
import NoteList from './components/NoteList';
import ViewNote from './components/ViewNote';
import CreateNote from './components/CreateNote';
import EditNote from './components/EditNote';
import './App.css';


class App extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     notes: []
  //   }
  // }

  // componentDidMount() {
  //   this.setState({ notes: data })
  // }

  render() {
    return (
      <div className="App">
      {/* <Sidebar /> */}
      <Route exact path='/' component={NoteList} />
      <Route exact path='/createNote' component={CreateNote} />
      <Route exact path='/viewNote/:id' component={ViewNote} />
      <Route exact path='/editNote/:id' component={EditNote} />
      </div>
    );
  }
}

export default App;
