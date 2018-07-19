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
  constructor() {
    super()
    this.state = {
      notes: []
    }
  }

  componentDidMount() {
    this.setState({ notes: data })
  }

  createNote = (note) => {
    let newNotes = this.state.notes.slice();
    this.state.notes.push(note)
    this.setState({ notes: data })
}

// editNote = (note) => {
//   let newNotes = this.state.notes.slice();
//   this.state.notes.push(note)
//   this.setState({ notes: data })
// }
  render() {
    return (
      <div className="App">
      {/* <Sidebar /> */}
      <Route exact path='/' component={NoteList} />
      <Route path='/createNote' render={(props)=>{
      return( <CreateNote notes={this.state.notes} createNote={this.createNote}/>)
      }} />
      <Route path='/viewNote/:id' render={(props)=>{
        return <ViewNote {...props} />
      }} />
      <Route path='/editNote/:id' render={(props)=>{
        return <EditNote {...props} notes={this.state.notes} />
      }} />
      </div>
    );
  }
}

export default App;
