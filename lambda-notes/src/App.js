import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import SideBar from './components/SideBar';
import NoteForm from './components/NoteForm';
import Notes from './components/Notes';
import NoteView from './components/NoteView';



class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      title: '',
      textBody: ''
    }
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount() {
    axios
    .get('https://fe-notes.herokuapp.com/note/get/all')
    .then(response => 
      this.setState({ notes: response.data }))
    .catch(error => console.log(error));
  }

componentDidUpdate() {
  axios
  .get('https://fe-notes.herokuapp.com/note/get/all')
  .then(response => 
    this.setState({ notes: response.data }))
  .catch(error => console.log(error));
}



  render() {
    return (
      <div className="App">
      <SideBar />

      <div className="main-page-container">
      <Route
      path = "/new-note"
      render = {props => (
        <NoteForm {...props}
        changeHandler={this.changeHandler}
        notes={this.state.notes}/>
      )}/>

        
        <Route
        exact path = "/"
        render = {props =>(
          <Notes {...props}
          notes={this.state.notes}
          changeHandler={this.changeHandler}
          editNote={this.editNote}/>
        )}/>

        <Route
        path = '/notes/:id'
        render = {props => (
          <NoteView {...props}/>
        )}/>
        </div>

      </div>
    );
  }
}

export default App;
