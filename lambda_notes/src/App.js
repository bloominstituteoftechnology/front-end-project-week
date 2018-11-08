import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import { Route } from "react-router-dom";
import AllNotes from "./components/AllNotes";
import axios from "axios";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";
import ViewNote from "./components/ViewNote";
import EditNote from "./components/EditNote";
import Header from "./components/Navbar";
import DeleteModal from "./components/DeleteModal";
import Login from './components/Login';

const MainContent = styled.div`
  padding: 4rem;
  border-radius: 3px;
  text-decoration: none;
`;

class App extends Component {
  state = {
    notes: [],
    search: ""
  };
  componentDidMount() {
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(response => this.setState({ notes: response.data }))
      .catch(error => console.log(error));
  }

  createNote = newNote => {
    axios
      .post(`https://fe-notes.herokuapp.com/note/create`, { newNote })
      .then(response => {
        newNote._id = response.data.success;

        this.setState({ notes: [newNote, ...this.state.notes] });

        console.log("create note", this.state.notes.concat(newNote));
        console.log(response);
      });
  };
  editNote = (id, editedNote) => {
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, editedNote)
      .then(response => {
        console.log(response);
        editedNote._id = response.data;

        this.setState({
          notes: this.state.notes.map(note => {
            if (note._id === id) return response.data;
            return note;
          })
        });
      });
  };

  // if id === id return response.data return note
  deleteNote = id => {
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(response => {
        const deleteNote = this.state.notes.filter(note => {
          console.log(note._id, id, note._id !== id);

          return note._id !== id;
        });
        console.log("deleted note", deleteNote);
        this.setState({ notes: deleteNote }, console.log(this.state));
      });
  };








  render() {
    return (
      <div
        style={{
          backgroundImage:
            "linear-gradient( #e0e2e4, #c8ccce, #b1b7b6, #9da29d, #8c8c86)"
        }}
      >
      <Header />
      <Sidebar />
      <MainContent>
          <Route
            exact
            path="/"
            render={() => <AllNotes notes={this.state.notes} />}
          />
          <Route
            path="/createnote"
            render={props => (
              <CreateNote createNote={this.createNote} {...props} />
            )}
          />
          <Route
            path="/viewnote/:id"
            render={props => (
              <ViewNote {...props} deleteNote={this.deleteNote} />
            )}
          />
          <Route
            path="/editnote/:id"
            render={props => <EditNote editNote={this.editNote} {...props} />}
          />
        </MainContent>
      </div>
    );
  }
}

export default App;
