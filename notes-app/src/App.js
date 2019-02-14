import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import NotePage from './components/NotePage';
import NoteEditForm from './components/NoteEditForm';
import DeleteModal from './components/DeleteModal';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    }
  }

  componentDidMount() {
    this.getRequestAll();
  }

  getRequestAll = () => {
    axios.get('https://killer-notes.herokuapp.com/note/get/all')
    .then(response => 
      this.setState({
        ...this.state, notes: response.data
      }))
    .catch(error => console.log(error))
  }
  postRequest = (newNote) => {
    axios.post('https://killer-notes.herokuapp.com/note/create', newNote)
    .then(response => this.getRequestAll())
      //Or..
      // this.setState({
      //   ...this.state,
      //   notes: [...this.state.notes, {...newNote}]
      // }))
      .catch(error => console.log(error))
  }
  deleteRequest = (id) => {
    axios.delete(`https://killer-notes.herokuapp.com/note/delete/${id}`)
    .then(response => this.getRequestAll())
        // Or..
        // Setting state like this for practice
        // this.setState({
        // ...this.state,
        // notes: this.state.notes.filter(data => data._id !== id)
        // })
    .catch(error => console.log(error))
  }
  putRequest = (id, updatedNote) => {
    axios.put(`https://killer-notes.herokuapp.com/note/edit/${id}`, updatedNote)
    .then(response => this.getRequestAll())
    // Or
    // .then(response => {
    //   this.setState({
    //     ...this.state,
    //     notes: [...this.state.notes, {...updatedNote}]
    //     })
    // })
    .catch(error => console.log(error))
  } 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Lambda Notes</h1>
          <Link to={`/notes`} style={{textDecoration: 'none'}}><div>View Your Notes</div></Link>
          <Link to={'/createnote'} style={{textDecoration: 'none'}}><div>+ Create New Note</div></Link>
        </header>
        <div className="main-component">
          <Route 
          exact path='/notes' 
          render={(props) => 
            (<NoteList {...props} 
            notes={this.state.notes} />)} />
          <Route 
          path = '/createnote' 
          render={(props) => 
            (<NoteForm {...props} 
            postRequest={this.postRequest} />)} />
          <Route 
          path='/notes/:id' 
          render={(props) => 
            (<NotePage {...props} />)} />
          <Route
          path="/deletenote/:id"
          render={(props) =>
          (<DeleteModal {...props}
          deleteRequest={this.deleteRequest} />)}/>
          <Route 
          path='/editnote/:id'
          render= {(props) => 
            (<NoteEditForm {...props}
            putRequest={this.putRequest} />)}/>
        </div>
      </div>
    )
  }
}
export default App;
