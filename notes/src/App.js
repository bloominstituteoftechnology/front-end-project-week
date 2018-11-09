import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import HomePage from "./components/HomePage";
import Note from "./components/Note";
import CreateNote from "./components/CreateNote";
import EditNote from "./components/EditNote";
import OneNote from "./components/OneNote";
import Search from "./components/Search";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      editTitle: "",
      editTextBody: "",
      deleted: false,
      search: ''
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
  addNote = () => {
    axios.post("https://fe-notes.herokuapp.com/note/create", {
      title: this.state.title,
      textBody: this.state.textBody
    });
    this.setState({ title: "", textBody: "" });
  };

  editNote = id => {
    axios.put(`https://fe-notes.herokuapp.com/note/edit/${id}`, {
      title: this.state.editTitle,
      textBody: this.state.editTextBody
    });
    this.setState({ title: "", textBody: "" });
  };

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  deleteToggle = () => {
    this.setState({ deleted: !this.state.deleted })
  };

  
  render() {
    let searchedNotes = this.state.notes.filter(note => 
      note.title.toLowerCase().includes(this.state.search) || note.textBody.toLowerCase().includes(this.state.search));
    return (
      <div className="App">
        <Route path="/" component={HomePage} />
        <Route exact path="/notes"
          render={props => (
            <Note
              {...props}
              notes={this.state.notes}
              deleteNote={this.deleteNote} 
              search={this.state.search}
              changeHandler={this.changeHandler}/>
          )}/>
        <Route path="/createnote" 
          render={props => (
            <CreateNote
              {...props}
              notes={this.state.notes}
              changeHandler={this.changeHandler}
              addNote={this.addNote}/>
          )} />
        <Route exact path="/notes/:id"
          render={props => (
            <OneNote
              {...props}
              notes={this.state.notes}
              deleteNote={this.deleteNote}
              deleted={this.state.deleted}
              deleteToggle={this.deleteToggle}
              />
          )}/>
        <Route path="/notes/:id/edit"
          render={props => (
            <EditNote
              {...props}
              notes={this.state.notes}
              editTitle={this.state.editTitle}
              editTextBody={this.state.editTextBody}
              editNote={this.editNote}
              changeHandler={this.changeHandler} />
          )} />
        <Route path="/search"
          render={props => (
            <Search 
            {...props}
            search={this.state.search}
            notes={searchedNotes}
            changeHandler={this.changeHandler}/>
          )} />
        
      </div>
    );
  }
}

export default App;
