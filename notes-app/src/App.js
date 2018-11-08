import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NotesList from './components/NotesList';
import NoteForm from './components/NoteForm';
import NoteCard from './components/NoteCard';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      title: '',
      textBody: '',
      deleting: false,
    }
  }

  componentDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState(() => ({ notes: response.data }))
      })
      .catch(error => {
        console.log('Server Error', error)
      })  
  }

  deleteNote = (event, id) => {
    event.preventDefault();
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(response => {
        console.log('DELETE', response)
        this.setState({ note: response.data })
      })
      .catch( error => { console.log(error) })
  }

  toggleDeleting = () => {
    this.setState({deleting : !this.state.deleting})
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/"
        render={(props) => <NotesList {...props} notes={this.state.notes} />} />

        <Route path="/noteform" 
          render={props => <NoteForm {...props} /> }/>
        
        <Route path="/notecard/:id" 
          render={props => <NoteCard {...props} deleteNote={this.deleteNote} toggleDeleting={this.toggleDeleting}/>} />

      </div>
    );
  }
}

export default App;
//