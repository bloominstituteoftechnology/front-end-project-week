import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import Notes from "./components/Notes";
import CreateNote from "./components/CreateNote";
import EditNote from './components/EditNote';
import axios from "axios";
import OneNote from "./components/OneNote";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      editTitle: '',
      editTextBody: ''
    };
  }
  componentDidMount = () => {
    axios.get(`https://fe-notes.herokuapp.com/note/get/all`).then(response => {
      this.setState({ notes: response.data });
    });
  };
  deleteNote = id => {
    console.log("trying to delete...");
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };
  
  editNote = id => {
    axios
    .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, {
      title: this.state.editTitle,
      textBody: this.state.editTextBody
    });
    this.setState({ title: '', textBody: ''})
  }
  changeHandler = event => {
    this.setState({
        [event.target.name]: event.target.value
    })
}

  render() {
    return (
      <div className="App">
        <Route path="/" render={props => <HomePage {...props} />} />
        <Route exact path="/notes" render={props => (
            <Notes
              {...props}
              notes={this.state.notes}
              deleteNote={this.deleteNote}
            />
          )}
        />
        <Route
          exact
          path="/createnote"
          render={props => <CreateNote {...props} 
          notes={this.state.notes} 
          changeHandler={this.changeHandler}
          />}
        />
        <Route
          path="/notes/:id"
          render={props => 
          <OneNote 
            {...props} 
            notes={this.state.notes} 
            deleteNote={this.deleteNote}
          />
        }
          />
        <Route
          path="/notes/:id/edit"
          render={props => 
          <EditNote
          {...props}
          notes={this.state.notes}
          editTitle={this.state.editTitle}
          editTextBody={this.state.editTextBody}
          editNote={this.editNote}
          changeHandler={this.changeHandler}
          />}/>
      </div>
    );
  }
}

export default App;
