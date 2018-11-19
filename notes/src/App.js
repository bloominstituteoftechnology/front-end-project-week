import React, { Component } from "react";
import "./App.css";
import Sidebar from "./containers/Note/Sidebar";
import { Route } from "react-router-dom";
import NoteList from "./containers/Note/NoteList";
// import notes from "./data";
import NotePage from "./containers/Note/NotePage";
import NoteForm from "./containers/Note/NoteForm";
import axios from "axios";
// import {connect} from 'react-redux'
import EditNote from "./containers/Note/NoteEdit";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      title: "",
      textBody: "",
      delete: false,
      search:''
    };
  }
  componentDidMount() {
    // this.setState({ notes: notes });
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(res => this.setState({ notes: res.data }))
      .catch(err => console.log(err));
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  addNote = () => {
    axios.post("https://fe-notes.herokuapp.com/note/create", {
      title: this.state.title,
      textBody: this.state.textBody
    })
    .then(res => this.getNote()
    )
    this.setState({ title: "", textBody: "" });
  };

  getNote = () => {
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(res => this.setState({ notes: res.data }))
      .catch(err => console.log(err));
  };
  deleteNote = id => {
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(res =>
        this.getNote()
      )
      .catch(err => console.log(err));
  };

  editNote = id => {
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, {
        title: this.state.title,
        textBody: this.state.textBody
      } )
      .then( res => this.getNote())
      .catch(err => console.log(err))
}

  deleteNoteOn = () => {
    this.setState({ delete: true });
  };
  deleteNoteOff = e => {
    e.preventDefault();
    this.setState({ delete: false });
  };
  editContent = (title, textBody) => {
     this.setState({title: title, textBody: textBody})
   }

  render() {
    let filterNote = this.state.notes.filter(
      note =>
        note.title.toLowerCase().includes(this.state.search) ||
        note.textBody.toLowerCase().includes(this.state.search)
    )
    return (
      <div className="App">
        <Sidebar />
        <Route
          exact
          path="/"
          render={props => <NoteList
            notes={filterNote}
            seach={this.state.search}
            handleChange={this.handleChange}
            />}
        />
        <Route
         exact path="/note/:id"
          render={props => (
            <NotePage
              {...props}
              notes={this.state.notes}
              deleteNoteOn={this.deleteNoteOn}
              deleteNoteOff={this.deleteNoteOff}
              delete={this.state.delete}
              deleteNote={this.deleteNote}
              editContent={this.editContent}
            />
          )}
        />
        <Route
          path="/create"
          render={props => (
            <NoteForm
              {...props}
              notes={this.state.notes}
              addNote={this.addNote}
              handleChange={this.handleChange}
            />
          )}
        />
        <Route exact path='/note/:id/edit' render={props => (
          <EditNote
            {...props}
            title={this.state.title}
            textBody={this.state.textBody}
          notes={this.state.notes}
          handleChange={this.handleChange}
          editNote={this.editNote} />
        )} />
      </div>
    );
  }
}



export default App;
