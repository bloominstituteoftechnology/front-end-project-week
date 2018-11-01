import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

import Note from "./components/Note";
import Notes from "./components/Notes";
import NoteForm from "./components/NoteForm";
import NoteEdit from "./components/NoteEdit";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      id: "",
      updatedTitle: "",
      updatedTextBody: ""
    };
  }

  componentDidMount() {
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(response => this.setState({ notes: response.data }))
      .catch(error => console.log(error));
  }

  editNote = id => {
    axios.put(`http://fe-notes.herokuapp.com/note/edit/${id}`, {
      title: this.state.updatedTitle,
      textBody: this.state.updatedTextBody
    });
    this.setState();
  };

  deleteNote = id => {
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(response => {
        console.log(response);
        const updatedNotes = this.state.notes.filter(note => note._id !== id);
        this.setState({ notes: updatedNotes });
        console.log(this.state.notes.length);
      });
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  clickHandler = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <div className="sideBar">
          <h1 className="sideBar__headline">
            Lambda
            <br />
            Notes
          </h1>
          <button className="btn">View Your Notes</button>
          <br />
          <button className="btn">Create New Note</button>
        </div>

        <div className="content">
          {/* d i s p l a y   n o t e s */}
          <Route
            exact
            path="/"
            render={() => <Notes notes={this.state.notes.reverse()} />}
          />

          {/* d i s p l a y  s i n g l e  n o t e  */}
          {/* with   d e l e t e   m e t h o d   passed  */}
          <Route
            path="/note/get/:id"
            render={props => <Note {...props} deleteNote={this.deleteNote} />}
          />

          {/* a d d  n o t e  */}
          <Route path="/submit" component={NoteForm} />

          {/* e d i t  n o t e  */}
          <Route
            path="/note/edit/:id"
            render={props => (
              <NoteEdit
                {...props}
                notes={this.state.notes}
                editNote={this.editNote}
                updatedTitle={this.state.updatedTitle}
                updatedTextBody={this.state.updatedTextBody}
                handleInputChange={this.handleInputChange}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default App;
